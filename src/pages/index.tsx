'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Button, Text } from '@chakra-ui/react'

export default function MainPage() {
  const router = useRouter()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const hasVerifiedAge = sessionStorage.getItem('ageVerified')
    if (!hasVerifiedAge) {
      router.push('/age-verification')
    } else {
      setIsReady(true)
    }
  }, [router])

  if (!isReady) return null

  return (
    <Box textAlign="center" p={6}>
      <Text fontSize="2xl" fontWeight="bold">
        Добро пожаловать
      </Text>
      <Button colorScheme="blue" onClick={() => router.push('/age-verification')}>
        Проверить возраст снова
      </Button>
    </Box>
  )
}
