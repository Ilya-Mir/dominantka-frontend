'use client'

import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { Container, StyledModal, StyledButton, Overlay } from './AgeVerificationModalStyles'
import { Text, Box } from '@chakra-ui/react'

interface AgeVerificationModalProps {
  onReady: () => void
}

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({ onReady }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true) // Гарантируем, что код выполняется только на клиенте
    if (typeof window !== 'undefined' && document.getElementById('app-root')) {
      Modal.setAppElement('#app-root')
    }
  }, [])

  useEffect(() => {
    if (isClient) {
      const hasVerifiedAge = sessionStorage.getItem('ageVerified')
      if (!hasVerifiedAge) {
        setIsOpen(true)
      } else {
        onReady()
      }
    }
  }, [onReady, isClient])

  const handleConfirm = (): void => {
    sessionStorage.setItem('ageVerified', 'true')
    setIsOpen(false)
    onReady()
  }

  const handleDecline = (): void => {
    window.location.href = 'https://google.com'
  }

  if (!isClient) return null // Предотвращаем рендеринг на сервере

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleDecline}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => <StyledModal {...props}>{children}</StyledModal>}
      overlayElement={(props, content) => <Overlay {...props}>{content}</Overlay>}
    >
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
          <Text fontSize="xl" fontWeight="bold">
            Подтвердите ваш возраст
          </Text>
          <Text>Вам должно быть 18 лет или больше для входа на сайт.</Text>
          <StyledButton onClick={handleConfirm}>Мне есть 18</StyledButton>
          <StyledButton onClick={handleDecline}>Выйти</StyledButton>
        </Box>
      </Container>
    </Modal>
  )
}

export default AgeVerificationModal
