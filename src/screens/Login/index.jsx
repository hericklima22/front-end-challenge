import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export const LoginScreen = () => {
  const val = useContext(AuthContext)
  
  return (
    <View>
      <Text>{val}</Text>
      <Text>tela de login</Text>
    </View>
  )
}
