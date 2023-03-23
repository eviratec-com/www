import type { Post } from '@/types/Post'

import dbClient from '@/db'

export default async function fetchPostsByFeedSlug(slug: string): Promise<Post[]> {
  const p: Promise<Post[]> = new Promise((resolve, reject) => {
    const client: any = dbClient()

    client.connect()

    const query = `SELECT "posts".*, "feed_posts"."published" FROM "feeds" `
      + `LEFT JOIN "feed_posts" ON "feeds"."id" = "feed_posts"."feed" `
      + `JOIN "posts" ON "posts"."id" = "feed_posts"."post" `
      + `WHERE "slug" = $1::text ORDER BY "feed_posts"."published" DESC`

    client.query(query, [slug], (err, res) => {
      if (err) return reject(err)

      resolve(res.rows.map(row => {
        row.created = (new Date(row.created)).getTime()
        row.published = (new Date(row.published)).getTime()
        delete row.deleted
        return row
      }))

      client.end()
    })
  })

  const result: Post[] = await p

  return result
}
