import axios from "axios";
import React, { createContext } from "react";
import { BASE_URL } from '../config'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const register = (email, password, role) => {
    const body = JSON.stringify({"user": {email, password, role}})

    axios.post(`${BASE_URL}/users`, body, {headers: {'Content-Type': 'application/json'}})
    .then(response => console.warn(response.data))
    .catch(err => console.warn(`Erro de registro ${err}`))
  }

  const login = (email, password) => {
    const body = JSON.stringify({"user": {email, password}})

    axios.post(`${BASE_URL}/users/login`, body, {headers: {'Content-Type': 'application/json'}})
    .then(response => console.warn(response.data))
    .catch(err => console.warn(`Erro de login ${err}`))
  }


  return (
    <AuthContext.Provider value={{register, login}}>
      {children}
    </AuthContext.Provider>
  )
}