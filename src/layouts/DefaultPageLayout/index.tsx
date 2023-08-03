import { Sidebar } from '@/components/Sidebar'
import { Container } from './styles'

interface DefaultPageLayoutProps {
  children: React.ReactNode
}

export function DefaultPageLayout({ children }: DefaultPageLayoutProps) {
  return (
    <Container>
      <Sidebar />
      {children}
    </Container>
  )
}
