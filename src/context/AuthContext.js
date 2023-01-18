import axios from "axios";
import React, { createContext } from "react";
import { BASE_URL } from '../config'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const register = (email, password, role) => {
    const json = JSON.stringify({"user": {email, password, role}})

    axios.post(`${BASE_URL}/users`, json, {headers: {'Content-Type': 'application/json'}})
    .then(response => console.warn(response.data))
    .catch(err => console.warn(`Erro de registro ${err}`))
  }


  return (
    <AuthContext.Provider value={{register}}>
      {children}
    </AuthContext.Provider>
  )
}