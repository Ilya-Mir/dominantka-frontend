'use client'

import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'
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
  CheckBoxWrapper,
  ButtonWrapper,
  ModalTextBold,
} from './AgeVerificationModalStyles'
import { useState } from 'react'
import CustomCheckbox from '@/components/Checkbox'
import CustomButton from '@/components/CustomButton'

const AgeVerificationPage: NextPage = () => {
  const router = useRouter()
  const [isChecked, setIsChecked] = useState(false)

  const handleConfirm = () => {
    if (isChecked) {
      sessionStorage.setItem('ageVerified', 'true')
      router.push('/')
    }
  }

  const handleDecline = () => {
    window.history.back()
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
          <ModalContent>
            <Title>Dominantka.ru</Title>
            <SubtitleWrapper>
              <SubtitleLine />
              <Subtitle>Здесь нет и никогда не будет секса и порно!</Subtitle>
              <SubtitleLine />
            </SubtitleWrapper>
            <ModalText>
              <ModalTextBold>СТРОГО 21+</ModalTextBold>
              ЕСЛИ ВЫ НЕ СООТВЕТСТВУЕТЕ ЭТОМУ ВОЗРАСТУ, ПОКИНЬТЕ САЙТ! Этот сайт НЕ нарушает
              законодательство РФ, не пропагандирует ЛГБТ, не рекламирует услуги проституток БДСМ,
              не размещает и не распространяет порно контент.
            </ModalText>
            <CheckBoxWrapper>
              <CustomCheckbox
                label="Мне есть 21 год"
                isChecked={isChecked}
                onChange={setIsChecked}
              />
            </CheckBoxWrapper>
            <ButtonWrapper>
              <CustomButton
                variant="solid"
                size="full"
                onClick={handleConfirm}
                disabled={!isChecked}
              >
                НАЙТИ ГОСПОЖУ БДСМ
              </CustomButton>

              <CustomButton variant="outline" size="200px" onClick={handleDecline}>
                ВЫЙТИ
              </CustomButton>
            </ButtonWrapper>
          </ModalContent>
        </ModalBox>
      </ModalContainer>
    </Wrapper>
  )
}

export default AgeVerificationPage
