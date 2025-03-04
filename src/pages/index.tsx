import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Container,
  TextTitle,
  TextWrapper,
  Title,
  Text,
  ContentWrapper,
  MakeHappierWrapper,
  MakeHappierTitle,
  MakeHappierText,
} from '@/styles/pages'

export default function MainPage() {
  const router = useRouter()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const hasVerifiedAge = sessionStorage.getItem('ageVerified')
    if (!hasVerifiedAge) {
      router.push('/age-verification')
    } else {
      setIsReady(true)
    }
  }, [router])

  if (!isReady) return null

  return (
    <Container>
      <ContentWrapper>
        <Title>ДОБРО ПОЖАЛОВАТЬ НА DOMINANTKA.RU, ТУТ ВАС ЖДУТ:</Title>
        <TextWrapper>
          <TextTitle>БДСМ ЗНАКОМСТВА</TextTitle>
          <Text>
            Сайт создан с целью поддержать тех, кто ищет реальные БДСМ встречи и человека, с которым
            можно разделить свои желания.
          </Text>
          <TextTitle>УДОБСТВО ПОИСКА ГОСПОЖИ</TextTitle>
          <Text>
            Здесь размещены анкеты Верхних дам, которые любят ролевые игры в стиле БДСМ и Фемдом по
            в разным городам нашей страны, а также дружественных стран. Возможность найти Госпожу
            именно в вашем городе/стране.
          </Text>
          <TextTitle>БЕЗОПАСНОСТЬ РЕАЛ ВСТРЕЧ</TextTitle>
          <Text>
            Каждая девушка на этом сайте - реальная Госпожа БДСМ. Администрация сайта фильтрует все
            анкеты во избежание фейков, скамов, развода т.д. Сайт не несет ответственности за
            качество проведенных сессий и другое (отсылка на блог ОРГ ИНФА)
          </Text>
        </TextWrapper>
        <MakeHappierWrapper>
          <MakeHappierTitle>Станьте счастливее</MakeHappierTitle>
          <MakeHappierText>
            Мы знаем точно, что реализация желаний в БДСМ делает людей счастливее! Жмите на кнопку и
            выбирайте свой город
          </MakeHappierText>
        </MakeHappierWrapper>
      </ContentWrapper>
    </Container>
  )
}
