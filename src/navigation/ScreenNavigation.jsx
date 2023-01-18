import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, RegisterScreen } from '../screens'

const Stack = createNativeStackNavigator()

export const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Navigator screenOptions={{headerShown: false}}> */}
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}