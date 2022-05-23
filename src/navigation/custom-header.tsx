import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

import { colors } from 'src/theme/colors'

import { Routes, useNavigation } from './routes'

const FilterButtonContainer = styled(TouchableOpacity)`
  position: absolute;
  right: 16px;
  top: 60px;
`
const ButtonText = styled(Text)`
  font-family: 'Roboto-Black';
  font-size: 17px;
  color: ${colors.purple};
`

const HeaderContainer = styled(View)`
  display: flex;
  padding-left: 16px;
  padding-top: 90px;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  background-color: ${colors.tapBarColor};
`
const TitleRouter = styled(Text)`
  font-family: 'Roboto-Bold';
  font-size: 30px;
  margin-top: auto;
`
interface CustomHeaderProps {
  title: string
}

export const CustomHeader = ({ title }: CustomHeaderProps) => {
  const { navigate } = useNavigation()

  return (
    <HeaderContainer>
      <TitleRouter>{title}</TitleRouter>
      <FilterButtonContainer onPress={() => navigate(Routes.FilterModal)}>
        <ButtonText>Filter</ButtonText>
      </FilterButtonContainer>
    </HeaderContainer>
  )
}
