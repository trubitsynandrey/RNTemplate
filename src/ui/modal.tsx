import React, { FC } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import styled from 'styled-components/native'

interface IModalMenu {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
}

const StyledModal = styled(Modal)`
  margin: 0;
  justify-content: flex-end;
  height: 100px;
`

const Container = styled.View`
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

const Blur = styled(View)`
  padding: 20px;
`

export const ModalMenu: FC<IModalMenu> = ({
  showModal,
  setShowModal,
  children,
}) => {
  const closeModal = () => setShowModal(false)

  return (
    <StyledModal
      avoidKeyboard={true}
      isVisible={showModal}
      onSwipeComplete={closeModal}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      swipeDirection={['down']}
      useNativeDriverForBackdrop
      statusBarTranslucent
      backdropOpacity={0.1}
      useNativeDriver
      hideModalContentWhileAnimating>
      <Container>
        <Blur>{children}</Blur>
      </Container>
    </StyledModal>
  )
}
