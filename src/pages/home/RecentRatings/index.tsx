import { api } from '@/lib/axios'
import { RatingsList, Container, SectionTitle } from './styles'
import { useQuery } from 'react-query'
import { RatingCard, RatingCardData } from '@/components/RatingCard'

// interface RecentRatingsProps {
//   ratings: {
//     created_at: string
//     id: string
//     description: string
//     rate: number
//     user: {
//       id: string
//       name: string | null
//     }
//     book: {
//       id: string
//       author: string
//       name: string
//       cover_url: string
//     }
//   }[]
// }

export function RecentRatings() {
  const fetchRatings = () => {
    return api.get(`/ratings/recent`)
  }

  const {
    data: ratings,
    isFetching,
    error,
  } = useQuery<RatingCardData[]>('recent-ratings', async () => {
    const response = await fetchRatings()
    return response.data.ratings
  })

  return (
    <Container>
      <SectionTitle>Avaliações mais recentes</SectionTitle>
      {isFetching ? (
        <div>Carregando...</div>
      ) : error ? (
        <div>Ocorreu um erro ao obter os dados</div>
      ) : (
        <RatingsList>
          {ratings?.map((rating) => {
            return <RatingCard key={rating.id} rating={rating} />
          })}
        </RatingsList>
      )}
    </Container>
  )
}
