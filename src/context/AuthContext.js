import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from '../config'
import { AsyncStorage } from 'react-native'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState({})
  const [splashLoading, setSplashLoading] = useState(false)

  const register = (email, password, role) => {
    const body = JSON.stringify({"user": {email, password, role}})

    setIsLoading(true)

    axios.post(`${BASE_URL}/users`, body, {headers: {'Content-Type': 'application/json'}})
    .then(response => {
      setUserData(response.headers)
      AsyncStorage.setItem('userData', JSON.stringify(userData))
      setIsLoading(false)
      console.warn(response.headers.authorization)
    })
    .catch(err => {
      console.warn(`Erro de registro ${err}`)
      setIsLoading(false)
    })
  }

  const login = (email, password) => {
    const body = JSON.stringify({"user": {email, password}})
    
    setIsLoading(true)

    axios.post(`${BASE_URL}/users/login`, body, {headers: {'Content-Type': 'application/json'}})
    .then(response => {
      setUserData(response)
      AsyncStorage.setItem('userData', JSON.stringify(userData))
      setIsLoading(false)
      console.warn(response.headers.authorization)
    })
    .catch(err => {
      console.warn(`Erro de login ${err}`)
      setIsLoading(false)
    })
  }

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true)

      let userData = await AsyncStorage.getItem('userData')
      userData = JSON.parse(userData)

      if(userData) {
        setUserData(userData)
      }
      setSplashLoading(false)
    } catch(err) {
      setSplashLoading(false)
      console.warn(`Nao esta logado ${err}`)
    }
  }

  useEffect(() => {
    isLoggedIn()
  }, []) 

  return (
    <AuthContext.Provider value={{register, login, isLoading, userData, splashLoading}}>
      {children}
    </AuthContext.Provider>
  )
}