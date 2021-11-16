import React from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'

import { CHARACTERS } from 'src/App'
import { colors } from 'src/theme/colors'
import { Query } from 'src/types'

import { CharacterCard } from './character-card'

const CardsContainer = styled(SafeAreaView)`
  padding: 9px;
  background: ${colors.white};
`

export const CharacterScreen = () => {
  const { loading, data } = useQuery<Query>(CHARACTERS)

  if (loading) {
    return <Text>Loading...</Text>
  }

  return (
    <CardsContainer>
      <FlatList
        data={data.characters.results}
        numColumns={2}
        renderItem={({ item }) => (
          <CharacterCard
            characterName={item.name}
            imageSrc={item.image}
            status={item.status}
            key={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </CardsContainer>
  )
}
