import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import styled from 'styled-components'

import { useGetLocationsQuery } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

import { LocationCard } from './location-card'

const CardsContainer = styled(SafeAreaView)`
  padding-top: 20px;
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LocationScreen = () => {
  const { data, loading, error } = useGetLocationsQuery()

  if (loading) {
    return <Text>Loading..</Text>
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  return (
    <CardsContainer>
      <FlatList
        data={data?.locations.results}
        numColumns={2}
        renderItem={({ item }) => (
          <LocationCard
            locationType={item.type}
            locationName={item.name}
            key={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </CardsContainer>
  )
}
