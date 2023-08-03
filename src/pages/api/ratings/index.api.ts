import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { description, user_id, rate, book_id } = req.body

  await prisma.rating.create({
    data: {
      description,
      user_id,
      rate,
      book_id,
    },
  })

  res.status(201).end()
}
