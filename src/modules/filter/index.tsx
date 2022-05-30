import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'

import { InputButton } from './InputButton'
import { SelectorList } from './selector-list'

const dataStatus = [{ title: 'Status', data: ['Alive', 'Dead', 'Unknown'] }]
const dataGender = [
  { title: 'Gender', data: ['Female', 'Male', 'Genderless', 'Unknown'] },
]

export const FilterScreen = () => {
  const [status, setType] = useState('')
  const [gender, setGender] = useState('')
  const { navigate } = useNavigation()

  return (
    <>
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
