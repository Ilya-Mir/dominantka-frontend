import type { AppProps } from 'next/app'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { globalStyles } from '@/styles/global'
import Head from 'next/head'
import styled from '@emotion/styled'

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`

const MainContent = styled.main`
  flex: 1;
  position: relative;
  z-index: 1;
`

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/node_modules/modern-normalize/modern-normalize.css" />
      </Head>
      <ChakraProvider value={defaultSystem}>
        <Global styles={globalStyles} />
        <AppWrapper>
          <MainContent>
            <Component {...pageProps} />
          </MainContent>
        </AppWrapper>
      </ChakraProvider>
    </>
  )
}
