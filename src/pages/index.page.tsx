import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth].api'
import { prisma } from '@/lib/prisma'

export { default } from './home'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)

  const popularBooksRaw: Array<{
    id: number
    name: string
    author: string
    cover_url: string
    rating: number
  }> = await prisma.$queryRaw`
    select 
      b.*,
      avg(r.rate) as rating,
      count(r.rate) as rating_count
    from books b
    left join ratings r
      on r.book_id = b.id
    group by b.id
    order by rating_count desc
    limit 4
  `

  const popularBooks = popularBooksRaw.map((book) => ({
    id: book.id,
    name: book.name,
    author: book.author,
    cover_url: book.cover_url,
    rating: book.rating,
  }))

  return {
    props: {
      session,
      popularBooks,
    },
  }
}
