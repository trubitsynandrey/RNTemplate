import {
  NavigationProp,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native'

export enum Routes {
  EpisodeScreen = 'EpisodeScreen',
  CharacterScreen = 'CharacterScreen',
  MainNavigator = 'MainNavigator',
  LocationScreen = 'LocationScreen',
  FilterModal = 'FilterModal',
}

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<Record<string, unknown>, Routes>>()
