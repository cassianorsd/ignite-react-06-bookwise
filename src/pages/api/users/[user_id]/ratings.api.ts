import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const user_id = String(req.query.user_id)
  const query = req.query.query

  const queryByBook = query
    ? {
        book: {
          name: {
            contains: String(query),
          },
        },
      }
    : {}

  const ratings = await prisma.rating.findMany({
    select: {
      id: true,
      created_at: true,
      description: true,
      rate: true,
      book_id: true,
      user: {
        select: {
          id: true,
          name: true,
          avatar_url: true,
        },
      },
      book: {
        select: {
          id: true,
          author: true,
          name: true,
          cover_url: true,
        },
      },
    },
    where: {
      user_id,
      ...queryByBook,
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  res.status(200).json({
    ratings,
  })
}
