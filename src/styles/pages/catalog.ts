'use client'

import styled from '@emotion/styled'
import { media } from '@/styles/breakpoints'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0d141a;
  padding: 20px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: url('/img/catalog-bg.webp') center/cover no-repeat;
    opacity: 0.1;
    pointer-events: none;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 1;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #1e2d3d;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`

export const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background-size: cover;
  background-position: center;
`

export const CardInfo = styled.div`
  padding: 15px;
`

export const CardTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #ffffff;
  margin: 0 0 10px 0;
`

export const CardButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0e40b5;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0a2b71;
  }
`
