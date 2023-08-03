import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const search = String(req.query.search)
  const category_id = String(req.query.category_id)

  let books = await prisma.book.findMany({
    include: {
      ratings: true,
    },
    where: {
      OR: [
        {
          name: {
            contains: search,
          },
        },
        {
          author: {
            contains: search,
          },
        },
      ],
      ...(category_id
        ? {
            categories: {
              some: {
                categoryId: category_id,
              },
            },
          }
        : {}),
    },
  })

  books = books.map((book) => {
    return {
      ...book,
      rating:
        book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
        book.ratings.length,
    }
  })

  // const booksRaw: Array<{
  //   id: number
  //   name: string
  //   author: string
  //   cover_url: string
  //   rating: number
  // }> = await prisma.$queryRaw`
  //   select
  //     b.*,
  //     avg(r.rate) as rating,
  //     count(r.rate) as rating_count
  //   from books b
  //   left join ratings r
  //     on r.book_id = b.id
  //   group by b.id
  // `

  // const books = booksRaw.map((book) => ({
  //   id: book.id,
  //   name: book.name,
  //   author: book.author,
  //   cover_url: book.cover_url,
  //   rating: book.rating,
  // }))

  res.status(200).json({
    books,
  })
}
