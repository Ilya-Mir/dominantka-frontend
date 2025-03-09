import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Container,
  Grid,
  Card,
  CardImage,
  CardInfo,
  CardTitle,
  CardButton,
} from '@/styles/pages/catalog'
import Footer from '@/components/Footer'
import TypeSelectionModal from '@/components/TypeSelectionModal'
import { CatalogHeader } from '@/components/CatalogHeader'

// Временные данные для демонстрации
const mockData = Array(12).fill({
  id: 1,
  title: 'Госпожа БДСМ',
  image: '/img/profile-placeholder.webp',
})

const CatalogPage = () => {
  const router = useRouter()
  const [isReady, setIsReady] = useState(false)
  const [showTypeModal, setShowTypeModal] = useState(true)
  const [selectedType, setSelectedType] = useState<'real' | 'virt'>('real')

  useEffect(() => {
    const hasVerifiedAge = sessionStorage.getItem('ageVerified')
    if (!hasVerifiedAge) {
      router.push('/age-verification')
    } else {
      setIsReady(true)
    }
  }, [router])

  const handleTypeSelect = (type: 'real' | 'virt') => {
    setSelectedType(type)
    setShowTypeModal(false)
  }

  if (!isReady) return null

  return (
    <>
      <CatalogHeader type={selectedType} />
      <Container>
        <Grid>
          {mockData.map((item, index) => (
            <Card key={index}>
              <CardImage style={{ backgroundImage: `url(${item.image})` }} />
              <CardInfo>
                <CardTitle>{item.title}</CardTitle>
                <CardButton>СМОТРЕТЬ АНКЕТУ</CardButton>
              </CardInfo>
            </Card>
          ))}
        </Grid>
      </Container>
      <Footer />
      <TypeSelectionModal isOpen={showTypeModal} onSelect={handleTypeSelect} />
    </>
  )
}

export default CatalogPage
