import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'

import { colors } from 'src/theme/colors'

import { EpisodeCardProps } from './types'

const EpisodeContainer = styled(View)`
  width: auto;
  border-top-width: 1px;
  border-color: ${colors.charBorder};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 6.5px;
  padding-bottom: 11.5px;
`

const DescriptionContainer = styled(View)`
  display: flex;
`

const EpisodeNumber = styled(Text)`
  font-family: 'Roboto-Black';
  font-size: 17px;
  color: ${colors.black};
`

const EpisodeDate = styled(Text)`
  font-family: 'Roboto-Black';
  font-size: 11px;
  text-transform: uppercase;
  color: ${colors.greyBold};
`

const EpisodeName = styled(Text)`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: ${colors.charStatus};
`

const ArrowText = styled(Text)`
  color: ${colors.greyArrow};
`

export const EpisodeCard = ({
  episodeNumber,
  episodeName,
  episodeDate,
}: EpisodeCardProps) => {
  return (
    <EpisodeContainer>
      <DescriptionContainer>
        <EpisodeNumber>{episodeNumber}</EpisodeNumber>
        <EpisodeName>{episodeName}</EpisodeName>
        <EpisodeDate>{episodeDate}</EpisodeDate>
      </DescriptionContainer>
      <ArrowText>&gt;</ArrowText>
    </EpisodeContainer>
  )
}
