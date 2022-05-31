import { createContext, ReactNode, useContext, useState } from 'react'
import React from 'react'
import { noop } from 'lodash'

interface Values {
  inputData: {
    name: string
    species: string
  }
  status: string
  gender: string
  setStatus: React.Dispatch<React.SetStateAction<string>>
  setGender: React.Dispatch<React.SetStateAction<string>>
  setInputData: React.Dispatch<
    React.SetStateAction<{
      name: string
      species: string
    }>
  >
}

const initialValues: Values = {
  inputData: {
    name: '',
    species: '',
  },
  status: '',
  gender: '',
  setStatus: noop,
  setGender: noop,
  setInputData: noop,
}

const CharacterFilterContext = createContext(initialValues)

interface Props {
  children: ReactNode
}

export const CharacterFilterProvider = ({ children }: Props) => {
  const [inputData, setInputData] = useState({ name: '', species: '' })
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')

  const value = {
    status,
    gender,
    setStatus,
    setGender,
    inputData,
    setInputData,
  }

  return (
    <CharacterFilterContext.Provider value={value}>
      {children}
    </CharacterFilterContext.Provider>
  )
}

export const useCharacterFilterContext = (): Values =>
  useContext(CharacterFilterContext)
