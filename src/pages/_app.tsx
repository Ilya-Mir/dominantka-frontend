import type { AppProps } from 'next/app'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { globalStyles } from '@/styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
