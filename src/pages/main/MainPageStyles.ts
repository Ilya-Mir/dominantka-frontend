import styled from '@emotion/styled'

export const Container = styled.div<{ isReady: boolean }>`
  display: ${({ isReady }) => (isReady ? 'flex' : 'none')};
  flex-direction: column;
  padding: 16px;
`

export const Header = styled.header`
  font-size: 24px;
  font-weight: bold;
`
