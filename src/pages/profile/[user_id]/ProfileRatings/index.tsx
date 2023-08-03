import { SearchInput } from '@/components/SearchInput'
import { Container, Ratings } from './styles'
import { useQuery } from 'react-query'
import { api } from '@/lib/axios'
import { RatingCard } from '../components/RatingCard'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

interface RatingCardData {
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

interface SearchFormData {
  query: string
}

export function ProfileRatings() {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const { user_id } = router.query

  async function getRatings(query: string) {
    return api.get(`/users/${user_id}/ratings`, {
      params: {
        query,
      },
    })
  }

  const { register, handleSubmit } = useForm<SearchFormData>()

  const { data: ratings } = useQuery<RatingCardData[]>(
    ['recent-ratings', query],
    async () => {
      const response = await getRatings(query)
      return response.data.ratings
    },
  )

  async function onSubmit(data: SearchFormData) {
    setQuery(data.query)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchInput
          placeholder="Buscar livro avaliado"
          {...register('query')}
        />
      </form>
      <Ratings>
        {ratings &&
          ratings.map((rating) => {
            return <RatingCard key={rating.id} rating={rating} />
          })}
      </Ratings>
    </Container>
  )
}
