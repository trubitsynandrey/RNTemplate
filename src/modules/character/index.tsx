import React from 'react'
import { Text, View } from 'react-native'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'

import { CHARACTERS } from 'src/App'

import { CharacterCard } from './character-card'

const CardsContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 9px;
`

export const CharacterScreen = () => {
  const { loading, error, data } = useQuery(CHARACTERS)
  console.log(data?.characters.results[0])
  // console.log(error)

  // const ErrorView = error && <Text>Yo its error</Text>
  if (loading) {
    return <Text>Loading...</Text>
  }

  return (
    <CardsContainer>
      {data?.characters.results.map(item => (
        <CharacterCard
          characterName={item.name}
          imageSrc={item.image}
          key={item.id}
        />
      ))}
    </CardsContainer>
  )
}
