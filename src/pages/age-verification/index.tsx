'use client'

import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Button, Text, VStack } from '@chakra-ui/react'
import {
  Wrapper,
  MovingBackground,
  ModalContainer,
  ModalBox,
  Title,
  Subtitle,
  SubtitleWrapper,
  SubtitleLine,
  ModalContent,
  ModalText,
} from './AgeVerificationModalStyles'

const AgeVerificationPage: NextPage = () => {
  const router = useRouter()

  const handleConfirm = () => {
    sessionStorage.setItem('ageVerified', 'true')
    router.back()
  }

  const handleDecline = () => {
    window.location.href = 'https://google.com'
  }

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, { stiffness: 50, damping: 10 })
  const smoothY = useSpring(y, { stiffness: 50, damping: 10 })

  const moveX = useTransform(smoothX, [-50, 50], ['-5%', '5%'])
  const moveY = useTransform(smoothY, [-50, 50], ['-5%', '5%'])

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event
    const { innerWidth, innerHeight } = window

    x.set((clientX / innerWidth) * 100 - 50)
    y.set((clientY / innerHeight) * 100 - 50)
  }

  return (
    <Wrapper onMouseMove={handleMouseMove}>
      <MovingBackground style={{ x: moveX, y: moveY }} />
      <ModalContainer>
        <ModalBox>
          <VStack gap={4}>
            <ModalContent>
              <Title>Dominantka.ru</Title>
              <SubtitleWrapper>
                <SubtitleLine />
                <Subtitle>Здесь нет и никогда не будет секса и порно!</Subtitle>
                <SubtitleLine />
              </SubtitleWrapper>
              <ModalText>
                <Text fontSize="xl" fontWeight="bold">
                  СТРОГО 21+{' '}
                </Text>{' '}
                <br />
                ЕСЛИ ВЫ НЕ СООТВЕТСТВУЕТЕ ЭТОМУ ВОЗРАСТУ, ПОКИНЬТЕ САЙТ! Этот сайт НЕ нарушает
                законодательство РФ, не пропагандирует ЛГБТ, не рекламирует услуги проституток БДСМ,
                не размещает и не распространяет порно контент.
              </ModalText>
              <Button colorScheme="blue" onClick={handleConfirm}>
                Мне есть 18
              </Button>
              <Button variant="outline" onClick={handleDecline}>
                Выйти
              </Button>
            </ModalContent>
          </VStack>
        </ModalBox>
      </ModalContainer>
    </Wrapper>
  )
}

export default AgeVerificationPage
