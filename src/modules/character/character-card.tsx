import React from 'react'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components'

import { colors } from 'src/theme/colors'

import { CardProps } from './types'

const CharacterContainer = styled(View)`
  padding-top: 9px;
  width: 163px;
  height: 220px;
  margin-bottom: 20px;
  margin-right: 17px;
`

const CharImg = styled(Image)`
  width: 163px;
  height: 140px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-width: 1px;
  border-color: ${colors.charBorder};
  border-bottom-width: 0px;
`
const DescriptionContainer = styled(View)`
  padding: 12px;
  min-height: 80px;
  border-width: 1px;
  border-color: ${colors.charBorder};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-width: 0px;
`

const CharName = styled(Text)`
  font-family: 'Roboto-Black';
  font-size: 17px;
`
const CharStatus = styled(Text)`
  font-family: 'Roboto-Regular';
  font-size: 11px;
  color: ${colors.charStatus};
`

export const CharacterCard = ({
  imageSrc,
  characterName,
  status,
}: CardProps) => {
  return (
    <CharacterContainer>
      <CharImg source={{ uri: imageSrc }} />
      <DescriptionContainer>
        <CharStatus>{status}</CharStatus>
        <CharName>{characterName}</CharName>
      </DescriptionContainer>
    </CharacterContainer>
  )
}
