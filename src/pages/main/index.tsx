'use client'

import React, { useState } from 'react'
import AgeVerificationModal from '@/components/AgeVerificationModal'
import { Container, Header } from './MainPageStyles'

const MainPage = () => {
  const [isReady, setIsReady] = useState(false)

  const handleReady = () => {
    setIsReady(true)
  }

  return (
    <Container isReady={isReady}>
      <AgeVerificationModal onReady={handleReady} />
      {isReady && (
        <>
          <Header>Добро пожаловать</Header>
          <main>{/* Контент главной страницы */}</main>
        </>
      )}
    </Container>
  )
}

export default MainPage
