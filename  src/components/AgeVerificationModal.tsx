'use client'

import { useState, useEffect } from 'react'
import { Button, useDisclosure } from '@chakra-ui/react'

export const AgeVerificationModal = () => {
  const { onOpen, onClose } = useDisclosure()
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    const hasVerifiedAge = sessionStorage.getItem('ageVerified')
    if (!hasVerifiedAge) {
      onOpen()
    } else {
      setIsVerified(true)
    }
  }, [onOpen])

  const handleConfirm = () => {
    sessionStorage.setItem('ageVerified', 'true')
    setIsVerified(true)
    onClose()
  }

  return (
    <Button colorScheme="blue" onClick={handleConfirm}>
      Мне есть 18
    </Button>
  )
}
