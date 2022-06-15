import type { NextApiRequest, NextApiResponse } from 'next'

import { assistantFormSchema } from '@/features/assistant-form/schema'

function Post(req: NextApiRequest): void {
  const body = req.body

  console.log(body)
  assistantFormSchema.parse(body)
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json')

  switch (req.method) {
    case 'POST':
      try {
        Post(req)

        res.status(200).json({ success: true })
      } catch (error) {
        res.status(500).json({ error: 'Something went wrong' })
      }
      break

    default:
      res.status(405).json({ error: 'Invalid method' })
      break
  }
}
