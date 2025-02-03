'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { globalStyles } from '@/styles/global'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Global styles={globalStyles} />
      {children}
    </ChakraProvider>
  )
}
