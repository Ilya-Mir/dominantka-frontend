'use client'

import styled from '@emotion/styled'
import { media } from '@/styles/breakpoints'
import { motion } from 'framer-motion'
import { Text } from '@chakra-ui/react'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
`

export const MovingBackground = styled(motion.div)`
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background: url('/img/blurred-bg.jpg') center/cover no-repeat;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(10px);
  }
`

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`

export const ModalBox = styled.div`
  background: url('/img/age-bg.jpg') center/cover no-repeat;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  max-width: 630px;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: relative;
  z-index: 2;

  ${media.desktop} {
    max-width: 100%;
    width: 900px;
  }
`

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background: url('/img/blurred-bg.jpg') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(10px);
  }
`

export const Title = styled.h1`
  font-family: 'Akvitania', 'Roboto', sans-serif;
  font-size: 43px;
  font-weight: 400;
  white-space: nowrap;
  color: #ffffff;
  position: relative;
  margin-bottom: 12px;

  ${media.tablet} {
    font-size: 52px;
    margin-bottom: 8px;
  }

  ${media.desktop} {
    font-size: 75px;
    margin-bottom: 6px;
  }
`

export const SubtitleLine = styled.div`
  width: 33px;
  height: 1px;
  background-color: #ffffff;
  display: none;
  position: relative;

  ${media.tablet} {
    display: flex;
  }
`

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
  position: relative;

  margin-bottom: 59px;

  ${media.tablet} {
    justify-content: center;
    margin-bottom: 46px;
    white-space: nowrap;
  }

  ${media.desktop} {
    margin-bottom: 78px;
  }
`

export const Subtitle = styled.h5`
  font-family: 'Akvitania', 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  position: relative;
  text-align: right;

  ${media.tablet} {
    font-size: 14px;
    text-align: center;
  }
`

export const ModalText = styled(Text)`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  text-align: left;
  opacity: 90%;
  color: #ffffff;
  margin-bottom: 40px;

  ${media.tablet} {
    margin-bottom: 15px;
  }

  ${media.desktop} {
    margin-bottom: 12px;
  }
`

export const CheckBoxWrapper = styled.div`
  margin-bottom: 50px;

  ${media.tablet} {
    margin-bottom: 30px;
  }

  ${media.desktop} {
    margin-bottom: 50px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export const ModalTextBold = styled.span`
  font-weight: 800;
`

export const ModalContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 22px 22px 60px;

  ${media.tablet} {
    padding: 50px 250px 100px 50px;
  }

  ${media.desktop} {
    padding: 72px 351px 140px 70px;
  }
`
