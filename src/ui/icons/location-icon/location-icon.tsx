import { LocationActiveIcon } from './location-active-icon'
import { LocationInactiveIcon } from './location-inactive-icon'

export const LocationIcon = ({ focused }) =>
  focused ? LocationActiveIcon : LocationInactiveIcon
