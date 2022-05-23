import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

import { colors } from 'src/theme/colors'
import { Checkbox } from 'src/ui/checkbox'

const NameButton = styled(TouchableOpacity) <{ hideBorder?: boolean }>`
  margin-top: ${(props) => (props.hideBorder ? '0' : '20px')};
  display: flex;
  flex-direction: row;
  border: ${(props) => (props.hideBorder ? 0 : `0.5px solid ${colors.grey}`)};
  padding: 10px;
  align-items: center;
`

const DescriptionButtonWrapper = styled(View)`
  margin-left: 16px;
`

const InputName = styled(Text)`
  font-family: 'Roboto-Black';
  font-size: 17px;
`
const CheckBoxName = styled(Text)`
  font-family: 'Roboto-Black';
  font-size: 17px;
  font-weight: 400;
`

const InputNameDescription = styled(Text)`
  font-family: 'Roboto-Regular';
  color: ${colors.inputDescription};
`

interface InputButtonProps {
  name: string
  description?: string
  isCheckType?: boolean
}

export const InputButton = ({
  name,
  description,
  isCheckType,
}: InputButtonProps) => {
  const InputDescription = () => (
    <>
      <InputName>{name}</InputName>
      <InputNameDescription>{description}</InputNameDescription>
    </>
  )

  return (
    <NameButton hideBorder={isCheckType}>
      <Checkbox />
      <DescriptionButtonWrapper>
        {isCheckType ? (
          <CheckBoxName>{name}</CheckBoxName>
        ) : (
          <InputDescription />
        )}
      </DescriptionButtonWrapper>
    </NameButton>
  )
}
