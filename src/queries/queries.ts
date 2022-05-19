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
  query GetCharVar($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        status
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
