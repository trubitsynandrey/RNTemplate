import React, { useState } from 'react'
import { Alert, SectionList, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

import { colors } from 'src/theme/colors'

import { InputButton } from './InputButton'
import { SelectorList } from './selector-list'

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
const Separator = styled(View) <{ isTitle?: boolean }>`
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${colors.grey[0]};
  width: ${(props) => (props.isTitle ? '100%' : '85 %')};
  margin-left: auto;
`

const Title = styled(Text)`
  font-family: 'Roboto';
  color: ${colors.grey[0]};
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  margin-left: 16px;
  margin-bottom: 8.5px;
`

const dataStatus = [{ title: 'Status', data: ['Alive', 'Dead', 'Unknown'] }]
const dataGender = [
  { title: 'Gender', data: ['Female', 'Male', 'Genderless', 'Unknown'] },
]
const dataState = ['Alive', 'Dead', 'Unknown']

export const FilterScreen = () => {
  const [status, setType] = useState('')
  const [gender, setGender] = useState('')

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
      <SelectorList
        data={dataStatus}
        onSelect={(item) => setType(item)}
        value={status}
        headerStyle={{ marginTop: 20 }}
      />
      <SelectorList
        data={dataGender}
        onSelect={(item) => setGender(item)}
        value={gender}
        headerStyle={{ marginTop: 20 }}
      />
    </>
  )
}
