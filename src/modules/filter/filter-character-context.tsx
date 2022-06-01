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
  clearContext: () => void
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
  clearContext: noop,
}

const CharacterFilterContext = createContext(initialValues)

interface Props {
  children: ReactNode
}

export const CharacterFilterProvider = ({ children }: Props) => {
  const initialInputData = { name: '', species: '' }
  const [inputData, setInputData] = useState(initialInputData)
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')

  const clearContext = () => {
    setInputData(initialInputData)
    setStatus('')
    setGender('')
  }

  const value = {
    status,
    gender,
    setStatus,
    setGender,
    inputData,
    setInputData,
    clearContext,
  }

  return (
    <CharacterFilterContext.Provider value={value}>
      {children}
    </CharacterFilterContext.Provider>
  )
}

export const useCharacterFilterContext = (): Values =>
  useContext(CharacterFilterContext)
