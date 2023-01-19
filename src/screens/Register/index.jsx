import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { AuthContext } from "../../context/AuthContext";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  
  const {register, isLoading } = useContext(AuthContext)
  
  return (
    <View>
      <Spinner visible={isLoading} />
      <Text>Tela de registro</Text>
      
      <TextInput 
        value={email}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />

      <TextInput 
        value={password}
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      /> 

      <TextInput 
        value={role}
        placeholder="Funcao"
        onChangeText={text => setRole(text)}
      />

      <Button 
        title="Registrar"
        onPress={() => register(email, password, role)}
      />


    </View>
  )
}

