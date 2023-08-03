import { Avatar } from '@/components/Avatar'
import { Container, Divider, Info, Stat, Stats } from './styles'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import dayjs from 'dayjs'
import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'

interface ProfileInfoProps {
  user: {
    name: string
    avatar_url: string
    created_at: string
    stats: {
      books_read: number
      total_pages: number
      total_authors: number
      popular_category: string
    }
  }
}

export function ProfileInfo({ user }: ProfileInfoProps) {
  return (
    <Container>
      <Info>
        <Avatar size="lg" src={user.avatar_url} />
        <div>
          <Heading as="strong" size={'lg'}>
            {user.name}
          </Heading>
          <Text size="sm">
            membro desde {dayjs(user.created_at).format('YYYY')}
          </Text>
        </div>
      </Info>
      <Divider></Divider>
      <Stats>
        <Stat>
          <BookOpen />
          <div>
            <strong>{user.stats.total_pages}</strong>
            <Text size="sm">Páginas lidas</Text>
          </div>
        </Stat>
        <Stat>
          <Books />
          <div>
            <strong>{user.stats.books_read}</strong>
            <Text size="sm">Livros avaliados</Text>
          </div>
        </Stat>
        <Stat>
          <UserList />
          <div>
            <strong>{user.stats.total_authors}</strong>
            <Text size="sm">Autores lidos</Text>
          </div>
        </Stat>
        <Stat>
          <BookmarkSimple />
          <div>
            <strong>{user.stats.popular_category}</strong>
            <Text size="sm">Categoria mais lida</Text>
          </div>
        </Stat>
      </Stats>
    </Container>
  )
}
