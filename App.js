import React from 'react';
import { ScreenNavigation } from './src/navigation/ScreenNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
      <AuthProvider>
        <SafeAreaProvider>
          <ScreenNavigation />
        </SafeAreaProvider>
      </AuthProvider>
  )
}

export default App