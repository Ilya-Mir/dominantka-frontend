'use client'

import { useRouter } from 'next/navigation'
import { Button, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Overlay, ModalContainer, ModalBox } from './AgeVerificationModalStyles'

export default function AgeVerificationModal() {
  const router = useRouter()

  const handleConfirm = () => {
    sessionStorage.setItem('ageVerified', 'true')
    router.back()
  }

  const handleDecline = () => {
    window.location.href = 'https://google.com'
  }

  return (
    <Overlay>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <ModalContainer>
          <ModalBox>
            <VStack gap={4}>
              <Text fontSize="xl" fontWeight="bold">
                Подтвердите ваш возраст
              </Text>
              <Text>Вам должно быть 18 лет или больше для входа на сайт.</Text>
              <Button colorScheme="blue" onClick={handleConfirm}>
                Мне есть 18
              </Button>
              <Button variant="outline" onClick={handleDecline}>
                Выйти
              </Button>
            </VStack>
          </ModalBox>
        </ModalContainer>
      </motion.div>
    </Overlay>
  )
}
