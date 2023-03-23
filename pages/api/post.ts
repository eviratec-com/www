import type { NextApiRequest, NextApiResponse } from 'next'

import createPost from '@/functions/createPost'
import verifyReqUser from '@/functions/verifyReqUser'
import fetchFeedBySlug from '@/functions/fetchFeedBySlug'

import type { User } from '@/types/User'
import type { Post } from '@/types/Post'
import type { Feed } from '@/types/Feed'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post|Error>
) {
  try {
    const u: User = await verifyReqUser(req)

    if (!u) {
      return res.status(400).json({
        name: 'AUTH_ERROR',
        message: 'Invalid Session'
      })
    }

    const f: Feed = await fetchFeedBySlug(req.body.feed)

    const p: Post = await createPost({
      feed: f.id,
      author: u.id,
      content: req.body.content,
    })

    res.status(200).json(p)
  }
  catch (err) {
    res.status(400).json({
      name: 'AUTH_ERROR',
      message: err.message
    })
  }
}
