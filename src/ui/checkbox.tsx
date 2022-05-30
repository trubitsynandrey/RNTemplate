import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

import { colors } from 'src/theme/colors'

interface Props {
  isChecked: boolean
}

const CheckBoxItem = styled(TouchableOpacity) <Props>`
  width: 24px;
  height: 24px;
  border: 1.5px solid
    ${(props) => (props.isChecked ? colors.purple : colors.grey[0])};
  border-radius: 11px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const InnerCircle = styled(View) <Props>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${(props) => (props.isChecked ? colors.purple : '0')};
`

export const Checkbox = ({
  isChecked,
  onPress,
}: {
  isChecked: boolean
  onPress?: () => void
}) => {
  return (
    <CheckBoxItem isChecked={isChecked} onPress={onPress}>
      <InnerCircle isChecked={isChecked} />
    </CheckBoxItem>
  )
}
