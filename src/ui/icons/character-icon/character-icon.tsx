import { CharacterActiveIcon } from './character-active-icon'
import { CharacterInactiveIcon } from './character-inactive-icon'

export const CharacterIcon = ({ focused }) =>
  focused ? CharacterActiveIcon : CharacterInactiveIcon
