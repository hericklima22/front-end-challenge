import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, ActivityIndicator } from "react-native";

const SplashScreen = () => {
  
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: "#06bcee"}}>
      <ActivityIndicator size="large" color="#ffffff " />
    </View>
  )
}

export default SplashScreen