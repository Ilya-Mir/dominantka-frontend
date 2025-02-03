'use client'

import { useRouter } from 'next/navigation'
import { Box, Button, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

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
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="rgba(0, 0, 0, 0.75)"
      backdropFilter="blur(10px)"
      zIndex={1000}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <Box bg="white" p={6} borderRadius="md" maxW="400px" textAlign="center" boxShadow="lg">
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
        </Box>
      </motion.div>
    </Box>
  )
}
