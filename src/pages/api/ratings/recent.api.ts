import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  // const { page = 0 } = req.query

  // await new Promise((resolve) => setTimeout(resolve, 1000))

  // const [count, recentRatings] = await prisma.$transaction([
  //   prisma.rating.count(),
  const recentRatings = await prisma.rating.findMany({
    select: {
      id: true,
      created_at: true,
      description: true,
      rate: true,
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
    orderBy: {
      created_at: 'desc',
    },
    // take: 10,
    // skip: Number(page) * 10,
  })
  // ])

  // const hasNextPage = count > (Number(page) + 1) * 10
  // const nextPage = hasNextPage ? Number(page) + 1 : null

  res.status(200).json({
    ratings: recentRatings,
    // nextPage,
  })
}
