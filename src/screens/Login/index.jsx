import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { AuthContext } from "../../context/AuthContext";

export const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {login, isLoading } = useContext(AuthContext)
  
  return (
    <View>
      <Spinner visible={isLoading} />
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
