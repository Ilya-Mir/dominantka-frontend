'use client'

import { media } from '@/styles/breakpoints'
import styled from '@emotion/styled'
import * as Dialog from '@radix-ui/react-dialog'

export const StyledOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: linear-gradient(to bottom, rgba(26, 40, 52, 1) 0%, rgba(0, 0, 0, 1) 100%);
  z-index: 999;
`

export const StyledContent = styled(Dialog.Content)`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1001;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }
`

export const HalfContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0;
    &:first-of-type {
      margin-bottom: 60px;
    }
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: min(400px, 100%);
  height: min(400px, 100vw);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 60vw;
    height: 60vw;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    border: 3px solid rgba(255, 0, 0, 0.9);
    border-radius: 50%;
    pointer-events: none;
    box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.4);

    @media (max-width: 768px) {
      width: 45vw;
      height: 45vw;
    }

    ${media.tablet} {
      width: calc(300px + 5vw);
      height: calc(300px + 5vw);
    }

    ${media.desktop} {
      width: calc(300px + 5vw);
      height: calc(300px + 5vw);
    }
  }
`

export const StyledPicture = styled.picture`
  width: 300px;
  height: 300px;
  display: block;
  position: relative;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 45vw;
    height: 45vw;
  }

  ${media.tablet} {
    width: calc(300px + 5vw);
    height: calc(300px + 5vw);
  }

  ${media.desktop} {
    width: calc(300px + 5vw);
    height: calc(300px + 5vw);
  }
`

export const StyledImage = styled.img<{ isHovered: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${({ isHovered }) => (isHovered ? 'none' : 'grayscale(100%)')};
  transition: filter 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`

export const Divider = styled.div`
  position: relative;
  width: 60px;
  background: url('/img/divider.webp') center/auto 100% no-repeat;
  flex-shrink: 0;

  @media (min-width: 769px) {
    height: 100vh;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 100%;
    position: absolute;
    transform: rotate(90deg);
    background: url('/img/divider.webp') center/contain 100% no-repeat;
    margin: 20px 0;
  }
`

export const Title = styled.h2`
  font-family: 'Akvitania', 'Roboto', sans-serif;
  color: #ffffff;
  font-size: 32px;
  text-align: center;
  margin-top: 20px;
  font-weight: 400;
  width: min(400px, 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 32px;
    height: 2px;
    background-color: #ffffff;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 24px;
  }
`
