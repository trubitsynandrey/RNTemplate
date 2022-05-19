import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'

import { colors } from 'src/theme/colors'

import { LocationCardProps } from './types'

const LocationContainer = styled(View)`
  width: 163px;
  min-height: 80px;
  margin-bottom: 20px;
  margin-right: 17px;
`
const DescriptionContainer = styled(View)`
  padding: 12px;
  min-height: 80px;
  border-width: 1px;
  border-color: ${colors.charBorder};
  border-radius: 8px;
`

const LocationName = styled(Text)`
  font-family: 'Roboto-Black';
  font-size: 17px;
`
const LocationType = styled(Text)`
  font-family: 'Roboto-Regular';
  font-size: 11px;
  color: ${colors.charStatus};
`

export const LocationCard = ({
  locationName,
  locationType,
}: LocationCardProps) => {
  return (
    <LocationContainer>
      <DescriptionContainer>
        <LocationType>{locationType}</LocationType>
        <LocationName>{locationName}</LocationName>
      </DescriptionContainer>
    </LocationContainer>
  )
}
