import React from 'react'
import { FlatList, SafeAreaView, StatusBar, Text } from 'react-native'
import styled from 'styled-components'

import { useGetCharVarQuery } from 'src/generated/graphql'
import { useGetCharactersQuery } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

import { CharacterCard } from './character-card'

const CardsContainer = styled(SafeAreaView)`
  padding-top: 20px;
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CharacterScreen = () => {
  const { data, loading, fetchMore } = useGetCharVarQuery()

  const page = data?.characters.info.next
  console.log(data)

  if (loading) {
    return <Text>Loading...</Text>
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#61dafb'} />
      <CardsContainer>
        <FlatList
          data={data?.characters.results}
          keyExtractor={(item) => item.id}
          numColumns={2}
          onEndReached={() => {
            console.log('reached')
            fetchMore({
              variables: {
                page,
              },
            })
          }}
          renderItem={({ item }) => (
            <CharacterCard
              characterName={item.name}
              imageSrc={item.image}
              status={item.status}
              key={item.id}
            />
          )}
        />
      </CardsContainer>
    </SafeAreaView>
  )
}
