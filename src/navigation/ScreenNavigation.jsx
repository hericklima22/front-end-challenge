import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, LoginScreen, RegisterScreen, SplashScreen } from '../screens'
import { AuthContext } from '../context/AuthContext'

const Stack = createNativeStackNavigator()

export const ScreenNavigation = () => {
  const { userData, splashLoading } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splashLoading ? 
        (
          <Stack.Screen name="SplashSreen" component= {SplashScreen} options={{headerShown: false}} />
        ) : 
        userData?.headers?.authorization ? (
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
        ) : (
          <>
          {/* <Stack.Navigator screenOptions={{headerShown: false}}> */}
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
          </>
        )
        }
        

      
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}