import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigation } from 'src/navigation/root'

import { GetCharVarQuery } from './generated/graphql'
import { AlertProvider } from './modules/alert-context'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: [],
            merge(existing = [], incoming) {
              if (existing.length !== 0) {
                console.log('merging', existing)

                return {
                  ...incoming,
                  results: [...existing.results, ...incoming.results],
                }
              }
              console.log('first', existing)

              return incoming
            },
          },
        },
      },
    },
  }),
})

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AlertProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </AlertProvider>
    </ApolloProvider>
  )
}
