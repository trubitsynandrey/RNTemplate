import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import styled from 'styled-components/native'

import { useNavigation } from 'src/navigation/routes'
import { DictationIcon } from 'src/ui/icons/dictation-icon'
import { SearchIcon } from 'src/ui/icons/search-icon'

import { FilterHead } from './filter-header'
import { Separator } from './selector-list'

const InputWrapper = styled(View)`
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 10px;
  height: 36px;
  background-color: rgba(118, 118, 128, 0.12);
`
interface Params {
  name?: string
}

export const InputScreen = () => {
  const { setOptions } = useNavigation()
  const { params } = useRoute()
  const name = (params as Params)?.name
  console.log('params name', name)
  setOptions({
    header: () => <FilterHead isInput title={name} />,
  })

  return (
    <>
      <InputWrapper>
        <SearchIcon style={{ marginRight: 11 }} />
        <TextInput style={styles.input} placeholder={'Search'} />
        <DictationIcon />
      </InputWrapper>
      <Separator isTitle style={{ marginTop: 8.5 }} />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 22,
    flex: 1,
    fontSize: 17,
    lineHeight: 22,
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
})
