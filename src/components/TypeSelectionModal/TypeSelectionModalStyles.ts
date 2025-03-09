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
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1001;

  ${media.tablet} {
    flex-direction: row;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;

  ${media.tablet} {
    flex-direction: row;
    padding: 0 40px;
    gap: 0;
  }
`

export const HalfContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;

  &:first-of-type {
    margin-bottom: 60px;
  }

  ${media.tablet} {
    padding: 20px;

    &:first-of-type {
      margin-bottom: 0;
    }
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 60vw;
  height: 60vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45vw;
    height: 45vw;
    border: 3px solid rgba(255, 0, 0, 0.9);
    border-radius: 50%;
    box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.4);
    pointer-events: none;
  }

  ${media.tablet} {
    width: min(400px, 100%);
    height: min(400px, 100vw);

    &:before {
      width: calc(300px + 5vw);
      height: calc(300px + 5vw);
    }
  }

  ${media.desktop} {
    &:before {
      width: calc(300px + 5vw);
      height: calc(300px + 5vw);
    }
  }
`

export const StyledPicture = styled.picture`
  width: 45vw;
  height: 45vw;
  display: block;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;

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
  user-select: none;
`

export const Divider = styled.div`
  position: absolute;
  width: 100%;
  height: 100vw;
  transform: rotate(90deg);
  background: url('/img/divider.webp') center 100% no-repeat;
  margin: 20px 0;
  flex-shrink: 0;
  background-size: contain;

  ${media.tablet} {
    width: 60px;
    position: relative;
    height: 100vh;
    transform: none;
    background: url('/img/divider.webp') center/auto 100% no-repeat;
    margin: 0;
  }
`

export const Title = styled.h2`
  font-family: 'Akvitania', 'Roboto', sans-serif;
  color: #ffffff;
  font-size: 24px;
  text-align: center;
  margin-top: 10px;
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

  ${media.tablet} {
    margin-top: 20px;
    font-size: 32px;
  }
`
