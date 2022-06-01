import { gql } from '@apollo/client'

export const CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
        status
      }
    }
  }
`

export const CHARACTERSBYPAGE = gql`
  query GetCharVar($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        next
      }
      results {
        id
        name
        image
        status
        gender
        type
        species
      }
    }
  }
`

export const GETLOCATION = gql`
  query GetLocations {
    locations {
      results {
        id
        name
        type
      }
    }
  }
`
