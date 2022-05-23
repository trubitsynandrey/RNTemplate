import React from 'react'
import {
  DefaultSectionT,
  SectionList,
  SectionListData,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

import { InputButton } from './InputButton'

const Separator = styled(View) <{ isTitle?: boolean }>`
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${colors.grey[0]};
  width: ${(props) => (props.isTitle ? '100%' : '85 %')};
  margin-left: auto;
`

const Title = styled(Text)`
  font-family: 'Roboto';
  color: ${colors.grey[0]};
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  margin-left: 16px;
  margin-bottom: 8.5px;
`

interface SelectorListProps<T> {
  data: SectionListData<any, DefaultSectionT>[]
  onSelect: (item: string) => void
  value: string | undefined
  headerStyle?: StyleProp<ViewStyle>
}

export const SelectorList = <T,>({
  data,
  onSelect,
  value,
  headerStyle,
}: SelectorListProps<T>) => {
  return (
    <SectionList
      style={{ flexGrow: 0 }}
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <InputButton
          name={item}
          isCheckType
          setValue={onSelect}
          value={value}
        />
      )}
      ItemSeparatorComponent={() => <Separator />}
      renderSectionHeader={({ section: { title } }) => (
        <View style={headerStyle}>
          <Title>{title}</Title>
          <Separator isTitle />
        </View>
      )}
      ListFooterComponent={() => <Separator isTitle />}
    />
  )
}
