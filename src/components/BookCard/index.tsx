import { Rating } from '../Rating'
import { Text } from '../Text'
import { BookCover, BookInfo, BookTitle, Container } from './styles'

interface BookCardProps {
  book: {
    id: string
    name: string
    author: string
    cover_url: string
    rating: number
  }
}

export function BookCard({ book }: BookCardProps) {
  const imageUrl = book.cover_url.replace('public/', '/')
  return (
    <Container>
      <BookCover>
        <img src={imageUrl} alt="" />
      </BookCover>
      <BookInfo>
        <BookTitle>
          <strong>{book.name}</strong>
          <Text>{book.author}</Text>
        </BookTitle>
        <Rating rate={book.rating} />
      </BookInfo>
    </Container>
  )
}

// export const Container = styled('div', {})

// export const BookCover = styled(Image, {})

// export const BookInfo = styled('div', {})

// export const BookTitle = styled('div', {})
