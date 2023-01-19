import React from 'react';
import { ScreenNavigation } from './src/navigation/ScreenNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
      <AuthProvider>
        <SafeAreaProvider>
          <StatusBar backgroundColor='#06bcee' />
          <ScreenNavigation />
        </SafeAreaProvider>
      </AuthProvider>
  )
}

export default App