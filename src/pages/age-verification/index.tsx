import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button, Text, VStack } from '@chakra-ui/react'
import { Overlay, ModalContainer, ModalBox } from './AgeVerificationModalStyles'

const AgeVerificationPage: NextPage = () => {
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
    </Overlay>
  )
}

export default AgeVerificationPage
