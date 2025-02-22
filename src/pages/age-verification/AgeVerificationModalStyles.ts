import styled from '@emotion/styled'
import { media } from '@/styles/breakpoints'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const Title = styled.h1`
  font-family: 'Akvitania', 'Roboto', sans-serif;
  font-size: 43px;
  font-weight: 400;
  color: #ffffff;

  ${media.tablet} {
    font-size: 52px;
  }

  ${media.desktop} {
    font-size: 75px;
  }
`

export const SubtitleLine = styled.div`
  width: 33px;
  height: 1px;
  background-color: #ffffff;
  display: none;

  ${media.tablet} {
    display: flex;
  }
`

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`

export const Subtitle = styled.h5`
  font-family: 'Akvitania', 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;

  ${media.tablet} {
    font-size: 14px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  max-width: 630px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: url('/img/age-bg.jpg') center/cover no-repeat;
  width: 100%;

  ${media.desktop} {
    max-width: 100%px;
  }
`
