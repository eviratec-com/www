import type { NextApiRequest, NextApiResponse } from 'next'

import type { Post } from '@/types/Post'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post|Error>
) {
  res.status(200).json({
    id: 1000000,
    author: 100000,
    content: req.body.content,
    created: 3821093890123,
    published: 3821093890123,
  })
}
