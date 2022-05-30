import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'

import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { BackIcon } from 'src/ui/icons/back-icon'

const FilterHeadContainer = styled(View)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  position: relative;
  padding-top: 20px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 20px;
`

const FilterTitle = styled(Text)`
  font-family: 'Roboto-Black';
  font-size: 15px;
`

const ApplyButton = styled(TouchableOpacity)`
  right: 15;
  position: absolute;
  width: 64px;
  height: 28px;
  padding: 0px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${colors.purple};
  border-radius: 14px;
`
const ApplyButtonText = styled(Text)`
  font-family: 'Roboto-Black';
  font-size: 12px;
  color: ${colors.white};
`

const LeftButton = styled(TouchableOpacity)<{ isBack?: boolean }>`
  left: ${(props) => (props.isBack ? '8px' : '16px')};
  position: absolute;
  flex-direction: row;
`

const LeftButtonText = styled(Text)<{ isInput?: boolean }>`
  opacity: ${(props) => (props.isInput ? '1' : '0')};
  line-height: 22px;
  font-size: 17px;
  color: ${colors.purple};
  font-family: 'Roboto';
`
interface FilterHeadProps {
  title: string | undefined
  isInput?: boolean
}

export const FilterHead = ({ isInput, title }: FilterHeadProps) => {
  const { goBack } = useNavigation()

  return (
    <FilterHeadContainer>
      <LeftButton isBack={isInput} onPress={() => goBack()}>
        {isInput && <BackIcon style={{ marginRight: 5 }} />}
        <LeftButtonText isInput={isInput}>
          {isInput ? 'Back' : 'Clear'}
        </LeftButtonText>
      </LeftButton>
      <FilterTitle>{title}</FilterTitle>
      {!isInput && (
        <ApplyButton onPress={() => goBack()}>
          <ApplyButtonText>APPLY</ApplyButtonText>
        </ApplyButton>
      )}
    </FilterHeadContainer>
  )
}
