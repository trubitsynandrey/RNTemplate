import React from 'react'
import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useAlertContext } from 'src/modules/alert-context'
import { Alert } from 'src/ui/alert'

import { Routes } from './routes'
import { TabBar } from './tabbar'

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {
  const { visible } = useAlertContext()

  return (
    <React.Fragment>
      <StatusBar backgroundColor={'#000'} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Routes.MainNavigator}>
        <Stack.Screen name={Routes.MainNavigator} component={TabBar} />
      </Stack.Navigator>
      {visible && <Alert />}
    </React.Fragment>
  )
}
