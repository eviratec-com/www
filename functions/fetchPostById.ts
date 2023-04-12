import type { Post } from '@/types/Post'

import dbClient from '@/db'

export default async function fetchPostById(input: number): Promise<Post> {
  const p: Promise<Post> = new Promise((resolve, reject) => {
    const client: any = dbClient()

    client.connect()

    const query = `SELECT * FROM "posts" WHERE "id" = $1::integer`

    client.query(query, [input], (err, res) => {
      if (err) return reject(err)

      resolve(res.rows[0])

      client.end()
    })
  })

  const result: Post = await p

  return result
}
