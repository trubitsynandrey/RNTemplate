import React from 'react'
import { SectionList, View } from 'react-native'
import styled from 'styled-components'

import { useGetEpisodesQuery } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

import { EpisodeCard } from './episode-card'

const CardsContainer = styled(View)`
  background: ${colors.white};
  padding-top: 20px;
`

export const EpisodeScreen = () => {
  return (
    <CardsContainer>
      <EpisodeCard
        episodeNumber={'S01E01'}
        episodeName={'Pilot'}
        episodeDate={'december 2, 2013'}
      />
      <EpisodeCard
        episodeNumber={'S01E01'}
        episodeName={'Pilot'}
        episodeDate={'december 2, 2013'}
      />
      <EpisodeCard
        episodeNumber={'S01E01'}
        episodeName={'Pilot'}
        episodeDate={'december 2, 2013'}
      />
    </CardsContainer>
  )
}
