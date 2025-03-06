import React from 'react'
import { FooterWrapper, FooterContent, FooterLink, BottomText, FooterLogo } from './FooterStyles'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLink href="/catalog">Каталог</FooterLink>
        <FooterLink href="/create-profile">Разместить анкету</FooterLink>
        <FooterLink href="/courses">Курсы</FooterLink>
        <FooterLink href="/info">Информация</FooterLink>
      </FooterContent>
      <FooterLogo>Dominantka.ru</FooterLogo>
      <BottomText>© 2014 Dominantka.ru - БДСМ знакомства. Все права защищены.</BottomText>
    </FooterWrapper>
  )
}

export default Footer
