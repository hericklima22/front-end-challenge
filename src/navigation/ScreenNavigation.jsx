import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, LoginScreen, RegisterScreen } from '../screens'
import { AuthContext } from '../context/AuthContext'

const Stack = createNativeStackNavigator()

export const ScreenNavigation = () => {
  const { userData } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {console.error(userData?.headers?.authorization)}
        {userData?.headers?.authorization ? (
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
        ) : (
          <>
          {/* <Stack.Navigator screenOptions={{headerShown: false}}> */}
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
          </>
        )}

      
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}