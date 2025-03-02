import { css } from '@emotion/react'

export const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Akvitania';
    src: url('/fonts/Akvitania Modern/Akvitania Modern.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Advokat';
    src: url('/fonts/Advokat Modern/Advokat Modern.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto/static/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto/static/Roboto-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto/static/Roboto-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto/static/Roboto-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #000;
    color: #fff;
    min-height: 100vh;
    scroll-behavior: smooth;
  }

  #__next {
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
