import styled from '@emotion/styled'
import { media } from '@/styles/breakpoints'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
  height: 100vh;

  &:before {
    content: '';
    display: block;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 10px;
    width: 105%;
    height: 100%;
    background: url('/img/main-bg.webp') top right no-repeat;
    background-size: contain;
    z-index: 0;
    aspect-ratio: 1 / 4;
  }

  &:after {
    content: '';
    display: block;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 150%;
    aspect-ratio: 1 / 2;
    background: url('/img/dominantkaru-text-main.webp') left top no-repeat;
    background-size: contain;
    z-index: 0;
  }

  ${media.tablet} {
    &:before {
      width: 70%;
    }

    &:after {
      width: 100%;
    }
  }

  ${media.desktop} {
    &:before {
      width: 100%;
      right: -5vw;
    }

    &:after {
      width: 80%;
      height: 80%;
    }
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  z-index: 1;
  position: relative;
  margin: 0 auto;
  padding: 0 20px;

  ${media.tablet} {
    max-width: 400px;
  }

  ${media.desktop} {
    max-width: 755px;
  }
`

export const Title = styled.h1`
  font-family: 'AdvokatModern', 'Roboto', sans-serif;
  font-size: 25px;
  font-weight: 400;
  color: #ffffff;
  margin: 0 14vw 96px 16vw;
  padding-top: 187px;
  text-align: right;
  max-width: 235px;

  ${media.tablet} {
    font-size: 20px;
    margin: 0 0 34px 0;
    white-space: nowrap;
    text-align: left;
    max-width: 100%;
    padding-top: 47px;
  }

  ${media.desktop} {
    padding-top: 98px;
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

export const MakeHappierWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 66px;
  justify-content: flex-start;
  position: relative;

  ${media.tablet} {
    margin-bottom: 35px;
  }

  ${media.desktop} {
    margin-bottom: 48px;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 84px;
    height: 89px;
    background: url('/img/heart.webp') center no-repeat;
    top: -50px;
    right: -40px;
  }
`

export const MakeHappierTitle = styled.h5`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 16px;
  margin: 0 20px 6px auto;
  position: relative;
  font-weight: 900;
  text-transform: uppercase;
`

export const MakeHappierText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 14px;
  max-width: 50vw;
  text-align: right;
  position: relative;
  margin-left: auto;

  ${media.tablet} {
    max-width: 300px;
  }

  ${media.desktop} {
    max-width: 400px;
  }
`
