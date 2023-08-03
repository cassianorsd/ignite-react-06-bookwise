import dayjs from 'dayjs'
import {
  BookContainer,
  BookCover,
  BookInfo,
  BookTitle,
  Card,
  CardContent,
  Container,
} from './styles'
import { Text } from '@/components/Text'
import { Rating } from '@/components/Rating'

export interface RatingCardData {
  id: string
  created_at: Date
  description: string
  rate: number
  user: {
    id: string
    name: string | null
    avatar_url: string
  }
  book: {
    id: string
    author: string
    name: string
    cover_url: string
  }
}

interface RatingCardProps {
  rating: RatingCardData
}

export function RatingCard({ rating }: RatingCardProps) {
  const coverUrl = rating.book.cover_url.replace('public/', '/')

  return (
    <Container>
      <Text>{dayjs(rating.created_at).fromNow()}</Text>
      <Card>
        <BookContainer>
          <BookCover>
            <img src={coverUrl} alt="" />
          </BookCover>
          <BookInfo>
            <BookTitle>
              <strong>{rating.book.name}</strong>
              <Text>{rating.book.author}</Text>
            </BookTitle>
            <Rating rate={rating.rate} />
          </BookInfo>
        </BookContainer>
        <CardContent>
          <Text>{rating.description}</Text>
        </CardContent>
      </Card>
    </Container>
  )
}
