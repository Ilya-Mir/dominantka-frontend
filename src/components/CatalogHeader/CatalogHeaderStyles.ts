'use client'

import { media } from '@/styles/breakpoints'
import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  /* Mobile styles */
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  height: 311px;
  background: url('/img/header-catalog-pattern.webp') repeat-x center/auto 100%;
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 30px;
    height: 100%;
    background: url('/img/divider.webp') center/auto 100% no-repeat;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
    transform: scaleX(-1);
  }

  /* Tablet styles */
  ${media.tablet} {
    height: 235px;

    &:before,
    &:after {
      width: 25px;
    }
  }

  /* Desktop styles */
  ${media.desktop} {
    height: 490px;

    &:before,
    &:after {
      width: 33px;
    }
  }
`

export const CenterImage = styled.div<{ type: 'real' | 'virt' }>`
  /* Mobile styles */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 247px;
  height: 100%;
  background: ${({ type }) =>
    `url('/img/header-catalog-${type === 'real' ? '1' : '2'}.webp') center/contain no-repeat`};
  -webkit-mask-image: radial-gradient(
    ellipse 200% 200% at center,
    black 2%,
    rgba(0, 0, 0, 0.7) 8%,
    rgba(0, 0, 0, 0.4) 15%,
    rgba(0, 0, 0, 0.2) 25%,
    rgba(0, 0, 0, 0.1) 35%,
    transparent 45%
  );
  mask-image: radial-gradient(
    ellipse 200% 200% at center,
    black 2%,
    rgba(0, 0, 0, 0.7) 8%,
    rgba(0, 0, 0, 0.4) 15%,
    rgba(0, 0, 0, 0.2) 25%,
    rgba(0, 0, 0, 0.1) 35%,
    transparent 45%
  );

  /* Tablet styles */
  ${media.tablet} {
    transform: translate(-50%, -50%);
    width: 257px;
  }

  /* Desktop styles */
  ${media.desktop} {
    width: 530px;
  }
`

export const WelcomeText = styled.div`
  /* Mobile styles */
  position: absolute;
  top: 40px;
  left: 20px;
  font-family: 'Akvitania', 'Roboto', sans-serif;
  font-size: 28px;
  color: #ffffff;

  ${media.tablet} {
    top: 57px;
    left: 96px;
    font-size: 32px;
  }

  ${media.desktop} {
    top: 205px;
    left: 345px;
    font-size: 49px;
  }
`

export const ChooseText = styled.div`
  /* Mobile styles */
  position: absolute;
  top: 40px;
  right: 20px;
  font-family: 'Akvitania', 'Roboto', sans-serif;
  font-size: 28px;
  color: #ffffff;
  text-align: right;

  ${media.tablet} {
    top: 57px;
    right: 96px;
    font-size: 32px;
  }

  ${media.desktop} {
    top: 205px;
    right: 200px;
    font-size: 49px;
  }
`
