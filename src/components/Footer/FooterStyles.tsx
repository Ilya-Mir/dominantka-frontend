import styled from '@emotion/styled'
import { media } from '@/styles/breakpoints'

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #000;
  padding-top: 107px;
  padding-bottom: 63px;
  position: relative;
  margin-top: auto;

  &:after {
    content: '';
    position: absolute;
    top: 28px;
    right: 0;
    width: 125px;
    height: 152px;
    background-image: url('/img/footer.webp');
    background-size: contain;
    background-repeat: no-repeat;
  }

  ${media.tablet} {
    padding-top: 120px;
    padding-bottom: 83px;

    &:after {
      top: 12px;
      right: 32px;
      width: 156px;
      height: 189px;
    }
  }

  ${media.desktop} {
    padding-top: 249px;
    padding-bottom: 188px;

    &:after {
      top: 26px;
      right: 72px;
      width: 327px;
      height: 395px;
    }
  }
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: start;
  text-transform: uppercase;
  gap: 10px;
  max-width: 298px;
  margin: 0 auto;
  padding-left: 20px;

  ${media.tablet} {
    display: flex;
    max-width: 522px;
    flex-flow: row nowrap;
    gap: 0;
    justify-content: space-between;
    padding-left: 0;
  }
`

export const FooterText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  line-height: 14px;
  color: #ffffff;
  margin: 0;

  ${media.tablet} {
    font-size: 14px;
    line-height: 16px;
  }
`

export const FooterLink = styled.a`
  font-family: 'Roboto', sans-serif;
  position: relative;
  z-index: 1;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  ${media.tablet} {
    font-size: 14px;
    line-height: 16px;
  }
`

export const BottomText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  line-height: 14px;
  color: rgb(54, 54, 54);
  text-align: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
`

export const FooterLogo = styled.div`
  font-family: 'Akvitania', 'Roboto', sans-serif;
  font-size: 23px;
  font-weight: 400;
  color: #ffffff;
  text-align: left;

  position: absolute;
  top: 38px;
  left: 21px;

  ${media.tablet} {
    top: 57px;
    left: 96px;
  }

  ${media.desktop} {
    font-size: 49px;
    top: 118px;
    left: 200px;
  }
`
