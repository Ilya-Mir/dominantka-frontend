'use client'

import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
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
import { useState, useCallback, useEffect, useRef } from 'react'
import CustomCheckbox from '@/components/Checkbox'
import CustomButton from '@/components/CustomButton'
import { motion } from 'framer-motion'

const AgeVerificationPage: NextPage = () => {
  const router = useRouter()
  const [isChecked, setIsChecked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleConfirm = useCallback(async () => {
    if (isChecked) {
      setIsLoading(true)
      sessionStorage.setItem('ageVerified', 'true')
      await router.push('/')
    }
  }, [isChecked, router])

  const handleDecline = useCallback(() => {
    window.history.back()
  }, [])

  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleDecline()
    }
  }, [handleDecline])

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleDecline()
    }
  }, [handleDecline])

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleEscape, handleClickOutside])

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, { stiffness: 50, damping: 10 })
  const smoothY = useSpring(y, { stiffness: 50, damping: 10 })

  const moveX = useTransform(smoothX, [-50, 50], ['-5%', '5%'])
  const moveY = useTransform(smoothY, [-50, 50], ['-5%', '5%'])

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    const { clientX, clientY } = event
    const { innerWidth, innerHeight } = window

    x.set((clientX / innerWidth) * 100 - 50)
    y.set((clientY / innerHeight) * 100 - 50)
  }, [x, y])

  return (
    <Wrapper onMouseMove={handleMouseMove}>
      <MovingBackground style={{ x: moveX, y: moveY }} />
      <AnimatePresence>
        <ModalContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ModalBox
              ref={modalRef}
              role="dialog"
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <ModalContent>
                <Title id="modal-title">Dominantka.ru</Title>
                <SubtitleWrapper>
                  <SubtitleLine />
                  <Subtitle>Здесь нет и никогда не будет секса и порно!</Subtitle>
                  <SubtitleLine />
                </SubtitleWrapper>
                <ModalText id="modal-description">
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
                    disabled={!isChecked || isLoading}
                  >
                    {isLoading ? 'ПЕРЕХОД...' : 'НАЙТИ ГОСПОЖУ БДСМ'}
                  </CustomButton>

                  <CustomButton variant="outline" size="200px" onClick={handleDecline}>
                    ВЫЙТИ
                  </CustomButton>
                </ButtonWrapper>
              </ModalContent>
            </ModalBox>
          </motion.div>
        </ModalContainer>
      </AnimatePresence>
    </Wrapper>
  )
}

export default AgeVerificationPage
