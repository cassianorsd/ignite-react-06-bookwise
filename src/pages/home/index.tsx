import { DefaultPageLayout } from '@/layouts/DefaultPageLayout'
import { PopularBooksPanel } from './PopularBooksPanel'
import { Heading } from '@/components/Heading'
import { ChartLineUp } from 'phosphor-react'
import { Container, PageContent } from './styles'
import { RecentRatings } from './RecentRatings'

export interface HomeProps {
  popularBooks: Array<{
    id: number
    name: string
    author: string
    cover_url: string
    rating: number
  }>
}

export default function Home({ popularBooks }: HomeProps) {
  return (
    <DefaultPageLayout>
      <Container>
        <Heading size="2xl">
          <ChartLineUp />
          Início
        </Heading>
        <PageContent>
          <RecentRatings />
          <PopularBooksPanel books={popularBooks} />
        </PageContent>
      </Container>
    </DefaultPageLayout>
  )
}
