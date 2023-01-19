import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {login} = useContext(AuthContext)
  
  return (
    <View>
      <Text>tela de login</Text>

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

      <Button 
        title="Login"
        onPress={() => login(email, password)}
      />
    </View>
  )
}
