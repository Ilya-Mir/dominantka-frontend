import React from 'react'
import { ButtonVariants, ButtonSizes, StyledButton } from './CustomButtonStyles'

interface CustomButtonProps {
  children: React.ReactNode
  variant?: ButtonVariants
  size?: ButtonSizes
  onClick?: () => void
  disabled?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant = 'solid',
  size = 'auto',
  onClick,
  disabled = false,
}) => {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}

export default CustomButton
