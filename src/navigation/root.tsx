import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useAlertContext } from 'src/modules/alert-context'
import { FilterHead } from 'src/modules/filter/filter-header'
import { FilterScreen } from 'src/modules/filter/index'
import { InputScreen } from 'src/modules/filter/input-screen'
import { Alert } from 'src/ui/alert'

import { Routes } from './routes'
import { TabBar } from './tabbar'

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {
  const { visible } = useAlertContext()

  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Routes.MainNavigator}>
        <Stack.Group
          screenOptions={{ presentation: 'modal', headerShown: true }}>
          <Stack.Screen
            name={Routes.FilterModal}
            component={FilterScreen}
            options={{
              header: () => <FilterHead title={'Filter'} />,
              contentStyle: { backgroundColor: 'white' },
            }}
          />
          <Stack.Screen
            name={Routes.InputModal}
            component={InputScreen}
            options={{
              header: () => <FilterHead isInput title={'Name'} />,
              contentStyle: { backgroundColor: 'white' },
            }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name={Routes.MainNavigator} component={TabBar} />
        </Stack.Group>
      </Stack.Navigator>
      {visible && <Alert />}
    </React.Fragment>
  )
}
