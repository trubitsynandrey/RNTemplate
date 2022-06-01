import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

import { Routes, useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { Checkbox } from 'src/ui/checkbox'

const NameButton = styled(TouchableOpacity)<{ hideBorder?: boolean }>`
  margin-top: ${(props) => (props.hideBorder ? '0' : '20px')};
  display: flex;
  flex-direction: row;
  border: ${(props) => (props.hideBorder ? 0 : `1px solid ${colors.grey[0]}`)};
  padding: 10px;
  align-items: center;
  padding-left: 19px;
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
  font-style: normal;
`

const InputNameDescription = styled(Text)`
  font-family: 'Roboto-Regular';
  color: ${colors.inputDescription};
`

interface InputButtonProps {
  name: string
  description?: string
  isCheckType?: boolean
  value?: string
  setValue?: (item: string) => void
  isInputValue?: boolean
}

export const InputButton = ({
  name,
  description,
  isCheckType,
  setValue,
  value,
  isInputValue,
}: InputButtonProps) => {
  const handleOnPress = () => {
    // setIsChecked(!isChecked)
    setValue(name)
  }

  const handleNavigate = () => {
    navigate(Routes.InputModal, { name })
  }

  const { navigate } = useNavigation()

  const isChecked = value === name

  const InputDescription = () => (
    <>
      <InputName>{name}</InputName>
      <InputNameDescription>{description}</InputNameDescription>
    </>
  )

  return (
    <NameButton
      hideBorder={isCheckType}
      onPress={isCheckType ? handleOnPress : handleNavigate}>
      <Checkbox
        isChecked={isChecked || isInputValue}
        onPress={isCheckType ? handleOnPress : handleNavigate}
      />
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
