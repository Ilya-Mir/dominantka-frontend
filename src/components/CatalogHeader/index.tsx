'use client'

import { CenterImage, ChooseText, HeaderContainer, WelcomeText } from './CatalogHeaderStyles'

interface CatalogHeaderProps {
  type: 'real' | 'virt'
}

export const CatalogHeader = ({ type }: CatalogHeaderProps) => {
  return (
    <HeaderContainer>
      <CenterImage type={type} />
      <WelcomeText>ДОБРО ПОЖАЛОВАТЬ В ХРАМ!</WelcomeText>
      <ChooseText>ВЫБЕРИ СВОЮ ГОСПОЖУ</ChooseText>
    </HeaderContainer>
  )
}
