import React from 'react'
import { Alert, SectionList, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'

import { colors } from 'src/theme/colors'

import { InputButton } from './InputButton'

const FilterHeadContainer = styled(View)`
  margin-bottom: 10px;
`

const FilterTitle = styled(Text)`
  font-family: 'Roboto-Black';
  font-size: 15px;
  margin: 0 auto;
  padding-top: 18px;
`

const ApplyButton = styled(TouchableOpacity)`
  right: 0;
  margin-top: 18px;
  margin-right: 15px;
  position: absolute;
  width: 64px;
  height: 28px;
  padding: 0px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${colors.purple};
  border-radius: 14px;
`
const ApplyButtonText = styled(Text)`
  font-family: 'Roboto-Black';
  font-size: 12px;
  color: ${colors.white};
`
const Separator = styled(View)`
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${colors.grey};
  width: 88%;
  margin-left: auto;
`

const data = [{ title: 'Status', data: ['Alive', 'Dead', 'Unknown'] }]

export const FilterScreen = () => {
  return (
    <>
      <FilterHeadContainer>
        <FilterTitle>Filter</FilterTitle>
        <ApplyButton onPress={() => Alert.alert("You've applied the filter!")}>
          <ApplyButtonText>APPLY</ApplyButtonText>
        </ApplyButton>
      </FilterHeadContainer>
      <InputButton name="Name" description="Give a name" />
      <InputButton name="Species" description="Enter species" />
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <InputButton name={item} isCheckType />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </>
  )
}
