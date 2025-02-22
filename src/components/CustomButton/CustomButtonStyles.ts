import styled from '@emotion/styled'

export type ButtonVariants = 'solid' | 'outline'
export type ButtonSizes = 'full' | string

interface ButtonProps {
  variant: ButtonVariants
  size: ButtonSizes
  disabled?: boolean
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 0 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0%;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 2px solid #0e40b5;
  text-transform: uppercase;

  ${({ size }) => `
    width: ${size === 'full' ? '100%' : size};
  `}

  ${({ variant }) =>
    variant === 'solid'
      ? `
      background-color: #0E40B5;
      color: white;
      &:hover {
        background-color: #133E96;
      }
      &:active {
        background-color: #0A2B71;
      }
      &:focus {
        box-shadow: 0 0 0 3px rgba(14, 64, 181, 0.3);
      }
    `
      : `
      background: transparent;
      color: #0E40B5;
      &:hover {
        background-color: rgba(14, 64, 181, 0.1);
      }
      &:active {
        background-color: rgba(14, 64, 181, 0.2);
      }
      &:focus {
        box-shadow: 0 0 0 3px rgba(14, 64, 181, 0.3);
      }
    `}

    &:disabled {
    background-color: #a0a0a0 !important;
    border-color: #a0a0a0 !important;
    color: #ffffff !important;
    cursor: not-allowed;
    opacity: 0.6;
  }
`
