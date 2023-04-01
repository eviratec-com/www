import type { Post } from '@/types/Post'

import dbClient from '@/db'

export default async function fetchPosts(limit?: number): Promise<Post[]> {
  const _l: number = limit ? limit : 10

  const p: Promise<Post[]> = new Promise((resolve, reject) => {
    const client: any = dbClient()

    client.connect()

    const query = `SELECT "posts".*, "feed_posts"."published", `
      + `"users"."display_name", "users"."link" AS "user_link" FROM "posts" `
      + `JOIN "users" ON "users"."id" = "posts"."author" `
      + `JOIN "feed_posts" ON "posts"."id" = "feed_posts"."post" `
      + `WHERE "posts"."deleted" IS NULL ORDER BY "feed_posts"."published" DESC `
      + `LIMIT $1::integer`

    client.query(query, [_l], (err, res) => {
      if (err) return reject(err)

      resolve(res.rows)

      resolve(res.rows.map(row => {
        if (!row.link)
          delete row.link

        if (!row.images)
          delete row.images
        else
          row.images = row.images.split(/\n/)

        row.created = (new Date(row.created)).getTime()
        row.published = (new Date(row.published)).getTime()

        row.author = {
          id: row.author,
          link: row.user_link,
          display_name: row.display_name,
        }

        delete row.deleted

        return row
      }))

      client.end()
    })
  })

  const result: Post[] = await p

  return result
}
