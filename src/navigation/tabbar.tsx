import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CharacterScreen } from 'src/modules/character'
import { EpisodeScreen } from 'src/modules/episode'
import { LocationScreen } from 'src/modules/location'
import { CharacterIcon } from 'src/ui/icons/character-icon'
import { EpisodeIcon } from 'src/ui/icons/episode-icon'
import { LocationIcon } from 'src/ui/icons/location-icon'

import { Routes } from './routes'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={Routes.CharacterScreen}
        screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: 'rgba(248, 248, 248, 0.92)',
          },
        }}>
        <Tab.Screen
          name={Routes.CharacterScreen}
          component={CharacterScreen}
          options={{
            title: 'Character',
            headerTitle: 'Character',
            tabBarIcon: ({ focused }) => <CharacterIcon focused={focused} />,
          }}
        />
        <Tab.Screen
          name={Routes.LocationScreen}
          component={LocationScreen}
          options={{
            title: 'Location',
            headerTitle: 'Location',
            tabBarIcon: ({ focused }) => <LocationIcon focused={focused} />,
          }}
        />
        <Tab.Screen
          name={Routes.EpisodeScreen}
          component={EpisodeScreen}
          options={{
            title: 'Episode',
            headerTitle: 'Episode',
            tabBarIcon: ({ focused }) => <EpisodeIcon focused={focused} />,
          }}
        />
      </Tab.Navigator>
    </>
  )
}
