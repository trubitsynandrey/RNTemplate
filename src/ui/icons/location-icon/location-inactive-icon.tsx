import * as React from 'react'
import { Path, Svg } from 'react-native-svg'

import { colors } from 'src/theme/colors'

export const LocationInactiveIcon = (
  <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <Path
      d="M21.7019 15.8155C24.768 18.2759 26.4732 20.4508 25.8847 21.4691C24.955 23.0758 18.6567 21.1836 11.8172 17.2426C4.97768 13.3015 0.186078 8.80413 1.11523 7.1979C1.69647 6.19375 4.37456 6.55624 7.97139 7.93174"
      stroke={colors.grey}
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <Path
      d="M13.5 22.6664C18.1023 22.6664 21.8332 18.9355 21.8332 14.3332C21.8332 9.73091 18.1023 6 13.5 6C8.89766 6 5.16675 9.73091 5.16675 14.3332C5.16675 18.9355 8.89766 22.6664 13.5 22.6664Z"
      stroke={colors.grey}
      stroke-width="2"
      stroke-miterlimit="10"
    />
  </Svg>
)
