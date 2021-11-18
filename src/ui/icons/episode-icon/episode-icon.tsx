import { EpisodeActiveIcon } from './episode-active-icon'
import { EpisodeInactiveIcon } from './episode-inactive-icon'

export const EpisodeIcon = ({ focused }) => {
  return focused ? EpisodeActiveIcon : EpisodeInactiveIcon
}
