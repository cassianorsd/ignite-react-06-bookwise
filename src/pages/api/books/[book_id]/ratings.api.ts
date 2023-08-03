import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const book_id = String(req.query.book_id)

  const ratings = await prisma.rating.findMany({
    where: {
      book_id,
    },
    include: {
      user: true,
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  res.status(200).json({
    ratings,
  })
}
