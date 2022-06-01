import React, { useCallback } from 'react'
import { FlatList, SafeAreaView, StatusBar, Text } from 'react-native'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import styled from 'styled-components'

import { useGetCharVarQuery } from 'src/generated/graphql'
import { useGetCharactersQuery } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

import { useCharacterFilterContext } from '../filter/filter-character-context'
import { CharacterCard } from './character-card'

const CardsContainer = styled(SafeAreaView)`
  padding-top: 20px;
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CharacterScreen = () => {
  const { inputData, status, gender } = useCharacterFilterContext()

  const { data, loading, fetchMore, refetch } = useGetCharVarQuery()

  const page = data?.characters.info.next

  useFocusEffect(
    useCallback(() => {
      refetch({
        filter: {
          name: inputData.name,
          gender,
          status,
          species: inputData.species,
          type: '',
        },
      })
    }, [refetch, inputData.name, inputData.species, gender, status]),
  )

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
            if (page) {
              fetchMore({
                variables: {
                  page,
                },
              })
            }
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
