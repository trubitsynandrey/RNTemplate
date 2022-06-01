import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

import { colors } from 'src/theme/colors'

import { Routes, useNavigation } from './routes'

const FilterButtonContainer = styled(TouchableOpacity)`
  position: absolute;
  right: 16px;
  top: 60px;
  flex-direction: row;
  align-items: center;
`

const AppliedFilterIndicator = styled(View)`
  height: 12px;
  width: 12px;
  border-radius: 50px;
  background-color: ${colors.purple};
  margin-right: 6px;
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
  isFilterApplied?: boolean
}

export const CustomHeader = ({
  title,
  isFilterApplied = false,
}: CustomHeaderProps) => {
  const { navigate } = useNavigation()

  return (
    <HeaderContainer>
      <TitleRouter>{title}</TitleRouter>
      <FilterButtonContainer onPress={() => navigate(Routes.FilterModal)}>
        {isFilterApplied && <AppliedFilterIndicator />}
        <ButtonText>Filter</ButtonText>
      </FilterButtonContainer>
    </HeaderContainer>
  )
}
