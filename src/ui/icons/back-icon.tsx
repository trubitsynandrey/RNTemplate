import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const BackIcon = (props: SvgProps) => (
  <Svg width={13} height={21} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.037 20.583.792 11.446a.975.975 0 0 1 0-1.392L10.037.917a1.456 1.456 0 0 1 2.04 0c.563.557.563 1.46 0 2.016L4.17 10.751l7.909 7.815c.562.557.562 1.46 0 2.017a1.456 1.456 0 0 1-2.04 0Z"
      fill="#5856D6"
    />
  </Svg>
)
