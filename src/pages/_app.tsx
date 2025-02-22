import type { AppProps } from 'next/app'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { globalStyles } from '@/styles/global'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/node_modules/modern-normalize/modern-normalize.css" />
      </Head>
      <ChakraProvider value={defaultSystem}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
