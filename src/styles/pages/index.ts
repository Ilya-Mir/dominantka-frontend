import styled from '@emotion/styled'
import { media } from '@/styles/breakpoints'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  height: 100vh;

  &:before {
    content: '';
    display: block;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('/img/main-bg.png') left no-repeat;
    background-size: contain;
    z-index: 0;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 250px;
  justify-content: center;
  z-index: 1;
  margin: 0 auto;

  ${media.tablet} {
    max-width: 400px;
  }

  ${media.desktop} {
    max-width: 755px;
  }
`

export const Title = styled.h1`
  font-family: 'Advocat', 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 400;
  white-space: nowrap;
  color: #ffffff;
  margin-bottom: 96px;

  ${media.tablet} {
    margin-bottom: 34px;
  }

  ${media.desktop} {
    margin-bottom: 64px;
    font-size: 36px;
  }
`

export const TextWrapper = styled.div`
  margin-bottom: 45px;
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;

  ${media.tablet} {
    margin-bottom: 35px;
  }

  ${media.desktop} {
    margin-bottom: 50px;
  }
`

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`

export const TextTitle = styled.h5`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;

  ${media.desktop} {
    font-size: 18px;
  }
`
