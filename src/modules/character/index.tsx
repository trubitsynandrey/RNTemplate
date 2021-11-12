import React from 'react'
import { Text, View } from 'react-native'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'

import { CHARACTERS } from 'src/App'

const CharacterCard = styled(View)`
  width: 60px;
  height: 60px;
`

export const CharacterScreen = () => {
  const { loading, error, data } = useQuery(CHARACTERS)
  console.log(data?.characters.results[0])
  // console.log(error)

  // const ErrorView = error && <Text>Yo its error</Text>

  return (
    <View>
      {data?.characters.results.map(item => (
        <CharacterCard key={item.id}>
          <Text>{item.name}</Text>
        </CharacterCard>
      ))}
    </View>
  )
}
