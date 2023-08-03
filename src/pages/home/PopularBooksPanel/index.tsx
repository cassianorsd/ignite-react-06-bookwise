import { ActionLink } from '@/components/ActionLink'
import { BooksList, Container, SectionTitle } from './styles'
import { CaretRight } from 'phosphor-react'
import { BookCard } from '@/components/BookCard'

interface PopularBooksPanelProps {
  books: Array<{
    id: number
    name: string
    author: string
    rating: number
  }>
}

export function PopularBooksPanel({ books }: PopularBooksPanelProps) {
  return (
    <Container>
      <SectionTitle>
        <h3>Livros populares</h3>
        <ActionLink href="/explore" variant={'purple'} size={'sm'}>
          Ver todos
          <CaretRight />
        </ActionLink>
      </SectionTitle>
      <BooksList>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </BooksList>
    </Container>
  )
}
