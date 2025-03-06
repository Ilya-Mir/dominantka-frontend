'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import {
  StyledOverlay,
  StyledContent,
  ModalContainer,
  ContentWrapper,
  HalfContainer,
  ImageWrapper,
  StyledPicture,
  StyledImage,
  Divider,
  Title,
} from './TypeSelectionModalStyles'

interface TypeSelectionModalProps {
  isOpen: boolean
  onSelect: (type: 'real' | 'virt') => void
}

const TypeSelectionModal: React.FC<TypeSelectionModalProps> = ({ isOpen, onSelect }) => {
  const [hoveredType, setHoveredType] = useState<'real' | 'virt' | null>(null)

  return (
    <Dialog.Root open={isOpen} onOpenChange={() => {}}>
      <Dialog.Portal>
        <StyledOverlay />
        <StyledContent>
          <ModalContainer>
            <ContentWrapper>
              <HalfContainer>
                <ImageWrapper
                  onMouseEnter={() => setHoveredType('real')}
                  onMouseLeave={() => setHoveredType(null)}
                  onClick={() => onSelect('real')}
                >
                  <StyledPicture>
                    <StyledImage
                      src="/img/var1.webp"
                      alt="Real"
                      isHovered={hoveredType === 'real'}
                    />
                  </StyledPicture>
                </ImageWrapper>
                <Title>РЕАЛ</Title>
              </HalfContainer>

              <Divider />

              <HalfContainer>
                <ImageWrapper
                  onMouseEnter={() => setHoveredType('virt')}
                  onMouseLeave={() => setHoveredType(null)}
                  onClick={() => onSelect('virt')}
                >
                  <StyledPicture>
                    <StyledImage
                      src="/img/var2.webp"
                      alt="Virtual"
                      isHovered={hoveredType === 'virt'}
                    />
                  </StyledPicture>
                </ImageWrapper>
                <Title>ВИРТ</Title>
              </HalfContainer>
            </ContentWrapper>
          </ModalContainer>
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default TypeSelectionModal
