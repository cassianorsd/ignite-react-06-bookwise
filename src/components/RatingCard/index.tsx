import dayjs from 'dayjs'
import { Avatar } from '../Avatar'
import { Rating } from '../Rating'
import { Text } from '../Text'
import {
  BookCover,
  BookInfo,
  CardBody,
  CardContent,
  CardHeader,
  Container,
} from './styles'
import { Heading } from '../Heading'
import Link from 'next/link'

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
      <CardHeader>
        <Link href={`/profile/${rating.user.id}`}>
          <Avatar src={rating.user.avatar_url} alt="" size="md" />
        </Link>
        <div>
          <Link href={`/profile/${rating.user.id}`}>{rating.user.name}</Link>
          <Text className="createdAt">
            {dayjs(rating.created_at).fromNow()}
          </Text>
        </div>
        <div>
          <Rating rate={rating.rate} />
        </div>
      </CardHeader>
      <CardBody>
        <BookCover>
          <img src={coverUrl} alt="" />
        </BookCover>
        <CardContent>
          <BookInfo>
            <Heading as="h3" size={'md'}>
              {rating.book.name}
            </Heading>
            <Text size="sm">{rating.book.author}</Text>
          </BookInfo>
          <div>
            <Text>{rating.description}</Text>
          </div>
        </CardContent>
      </CardBody>
    </Container>
  )
}
