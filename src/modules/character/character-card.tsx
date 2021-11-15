import React from 'react'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components'

const CharacterContainer = styled(View)`
  width: 163px;
  height: 180px;
`

const CharImg = styled(Image)`
  width: 163px;
  height: 140px;
  border-radius: 8px 
`
const DescriptionContainer = styled(View)``

export const CharacterCard = ({ imageSrc, characterName }) => {
  return (
    <CharacterContainer>
      <CharImg source={{ uri: imageSrc }} />
      <DescriptionContainer>
        <Text></Text>
        <Text>{characterName}</Text>
      </DescriptionContainer>
    </CharacterContainer>
  )
}
