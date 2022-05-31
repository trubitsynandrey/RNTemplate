import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { useCharacterFilterContext } from './filter-character-context'
import { InputButton } from './InputButton'
import { SelectorList } from './selector-list'

const dataStatus = [{ title: 'Status', data: ['Alive', 'Dead', 'Unknown'] }]
const dataGender = [
  { title: 'Gender', data: ['Female', 'Male', 'Genderless', 'Unknown'] },
]

export const FilterScreen = () => {
  const { setGender, setStatus, gender, status, inputData } =
    useCharacterFilterContext()
  const [isNameChecked, setIsNameChecked] = useState(false)
  const [isSpeciesChecked, setIsSpeciesChecked] = useState(false)
  useFocusEffect(
    useCallback(() => {
      console.log('focus', inputData)

      if (inputData.name !== '') {
        setIsNameChecked(true)
      }

      if (inputData.species !== '') {
        setIsSpeciesChecked(true)
      }

      return () => {
        console.log('out')
      }
    }, [inputData]),
  )

  return (
    <>
      <InputButton
        name="Name"
        description="Give a name"
        isInputValue={isNameChecked}
      />
      <InputButton
        name="Species"
        description="Enter species"
        isInputValue={isSpeciesChecked}
      />
      <SelectorList
        data={dataStatus}
        onSelect={(item) => setStatus(item)}
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
