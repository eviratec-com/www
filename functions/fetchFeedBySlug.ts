import type { Feed } from '@/types/Feed'

import dbClient from '@/db'

export default async function fetchFeedBySlug(input: string): Promise<Feed> {
  const p: Promise<Feed> = new Promise((resolve, reject) => {
    const client: any = dbClient()

    client.connect()

    const query = `SELECT * FROM "feeds" WHERE "slug" = $1::text`

    client.query(query, [input], (err, res) => {
      if (err) return reject(err)

      resolve(res.rows[0])

      client.end()
    })
  })

  const result: Feed = await p

  return result
}
