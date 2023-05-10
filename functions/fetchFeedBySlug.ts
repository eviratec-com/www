import type { Feed } from '@/types/Feed'

import dbClient from '@/db'

export default async function fetchFeedBySlug(input: string): Promise<Feed> {
  const client: any = await dbClient() // check out a single client
  const p: Promise<Feed> = new Promise((resolve, reject) => {
    const query = `SELECT * FROM "feeds" WHERE "slug" = $1::text`

    client.query(query, [input], (err, res) => {
      if (err) {
        reject(err)
        client.release() // release the client
        return
      }

      resolve(res.rows[0])

      client.release() // release the client
    })
  })

  const result: Feed = await p

  return result
}
