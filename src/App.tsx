import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigation } from 'src/navigation/root'

import { AlertProvider } from './modules/alert-context'

export const App = () => {
  return (
    <AlertProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </AlertProvider>
  )
}
