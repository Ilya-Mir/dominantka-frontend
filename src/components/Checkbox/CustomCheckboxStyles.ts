import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
`

export const CheckboxOuter = styled(motion.div)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease-in-out;
`

export const CheckboxInner = styled(motion.div)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
`

export const Label = styled.span`
  font-size: 18px;
  color: white;
`
