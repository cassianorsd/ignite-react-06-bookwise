import { Rating } from '@/components/Rating'
import {
  AlreadyReadBadge,
  BookCover,
  BookInfo,
  BookTitle,
  Container,
} from './styles'
import { Text } from '@/components/Text'

interface BookCardProps extends React.HTMLAttributes<HTMLButtonElement> {
  book: {
    id: string
    name: string
    author: string
    cover_url: string
    rating: number
  }
  alreadyRead?: boolean
}

export function BookCard({
  book,
  alreadyRead = false,
  ...props
}: BookCardProps) {
  const imageUrl = book.cover_url.replace('public/', '/')
  return (
    <Container {...props}>
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
      {alreadyRead && <AlreadyReadBadge>Lido</AlreadyReadBadge>}
    </Container>
  )
}
