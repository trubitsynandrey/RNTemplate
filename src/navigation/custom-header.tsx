import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

import { colors } from 'src/theme/colors'

const FilterButtonContainer = styled(TouchableOpacity)``
const ButtonText = styled(Text)`
  font-family: 'Roboto-Black'
  font-size: 17px;
  color: ${colors.purple};
`
const HeaderContainer = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 5px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.tapBarColor};
`
const TitleRouter = styled(Text)`
  font-family: 'Roboto-Bold'
  font-size: 30px;
  margin-top: auto;
`

export const CustomHeader = ({ title }) => {
  return (
    <HeaderContainer>
      <TitleRouter>{title}</TitleRouter>
      <FilterButtonContainer>
        <ButtonText>Filter</ButtonText>
      </FilterButtonContainer>
    </HeaderContainer>
  )
}
