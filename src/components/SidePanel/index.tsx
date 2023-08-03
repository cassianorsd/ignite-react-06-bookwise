import * as Dialog from '@radix-ui/react-dialog'
import {
  Overlay,
  Content,
  CloseButton,
  BookContainer,
  BookCover,
  BookInfo,
  BookStats,
  BookStat,
  Ratings,
  RatingHeader,
  RatingContent,
  RatingCard,
} from './styles'
import { BookOpen, BookmarkSimple, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { Rating } from '../Rating'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import dayjs from 'dayjs'
import { useSession } from 'next-auth/react'
import { LoginModal } from '../LoginModal'
import { RatingForm } from '../RatingForm'
import { useQuery } from 'react-query'

interface SidePanelProps extends Dialog.DialogProps {
  bookId?: string
}

interface Book {
  id: string
  name: string
  author: string
  cover_url: string
  total_pages: number
  ratings: {
    id: string
    description: string
    rate: number
    created_at: string
    user: {
      id: string
      name: string
      avatar_url: string
    }
  }[]
  categories: {
    category: {
      id: string
      name: string
    }
  }[]
}

interface Rating {
  id: string
  description: string
  rate: number
  created_at: string
  user: {
    id: string
    name: string
    avatar_url: string
  }
}

export function SidePanel({ bookId, ...props }: SidePanelProps) {
  const [book, setBook] = useState<Book | undefined>(undefined)
  const session = useSession()
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [showRatingForm, setShowRatingForm] = useState(false)

  const { data: ratings, refetch } = useQuery<Rating[]>(
    ['ratings', bookId],
    async () => {
      const response = await api.get(`/books/${bookId}/ratings`)
      return response.data.ratings
    },
    {
      enabled: !!bookId,
    },
  )

  useEffect(() => {
    if (!bookId) {
      return
    }
    api
      .get(`/books/${bookId}`)
      .then((response) => {
        setBook(response.data.book)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [bookId])

  const coverUrl = book && book.cover_url.replace('public/', '/')

  const rating = book
    ? book.ratings.reduce((acc, rating) => {
        return acc + rating.rate
      }, 0) / book?.ratings.length
    : 0

  const categoriesText = book
    ? book.categories.map((c) => c.category.name).join(', ')
    : ''

  function handleAvaliarButton() {
    if (session.status !== 'authenticated') {
      setOpenLoginModal(true)
    } else {
      setShowRatingForm(true)
    }
  }

  return (
    <>
      <Dialog.Root {...props}>
        <Dialog.Portal>
          <Overlay />
          <Content>
            <CloseButton>
              <X />
            </CloseButton>
            {book && (
              <>
                <BookContainer>
                  <div>
                    <BookCover>
                      <img src={coverUrl} alt="" />
                    </BookCover>
                    <BookInfo>
                      <div>
                        <Heading size="lg">{book.name}</Heading>
                        <Text size={'md'}>{book.author}</Text>
                      </div>
                      <div>
                        <Rating rate={rating} size={'md'} />
                        <Text size={'sm'}>
                          {book.ratings.length} avaliações
                        </Text>
                      </div>
                    </BookInfo>
                  </div>
                  <BookStats>
                    <BookStat>
                      <BookmarkSimple />
                      <div>
                        <Text size="sm">Categoria</Text>
                        <Text size="md" weight={'bold'}>
                          {categoriesText}
                        </Text>
                      </div>
                    </BookStat>
                    <BookStat>
                      <BookOpen />
                      <div>
                        <Text size="sm">Páginas</Text>
                        <Text size="md" weight={'bold'}>
                          {book.total_pages}
                        </Text>
                      </div>
                    </BookStat>
                  </BookStats>
                </BookContainer>
                <Ratings>
                  <div>
                    <Text>Avaliações</Text>
                    <Button onClick={handleAvaliarButton} variant={'tertiary'}>
                      Avaliar
                    </Button>
                  </div>
                  {showRatingForm && session.data?.user && (
                    <RatingForm
                      book_id={book.id}
                      user={session.data?.user}
                      onClose={() => {
                        setShowRatingForm(false)
                        refetch()
                      }}
                    />
                  )}
                  {ratings &&
                    ratings.map((rating) => {
                      return (
                        <RatingCard
                          key={rating.id}
                          ownedByUser={
                            session.data?.user?.id === rating.user.id
                          }
                        >
                          <RatingHeader>
                            <div>
                              <Avatar size="md" src={rating.user.avatar_url} />
                            </div>
                            <div>
                              <Text weight="bold" size="md">
                                {rating.user.name}
                              </Text>
                              <Text size="sm">
                                {dayjs(rating.created_at).fromNow()}
                              </Text>
                            </div>
                            <div>
                              <Rating rate={rating.rate} />
                            </div>
                          </RatingHeader>
                          <RatingContent>
                            <Text>{rating.description}</Text>
                          </RatingContent>
                        </RatingCard>
                      )
                    })}
                </Ratings>
              </>
            )}
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
      <LoginModal open={openLoginModal} onOpenChange={setOpenLoginModal} />
    </>
  )
}
