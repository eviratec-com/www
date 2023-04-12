import type { Reply } from '@/types/Reply'

import dbClient from '@/db'

export default async function fetchRepliesByPost(id: number): Promise<Reply[]> {
  const r: Promise<Reply[]> = new Promise((resolve, reject) => {
    const client: any = dbClient()

    client.connect()

    const query = `SELECT "replies".*, "users"."display_name", `
      + `"users"."link" AS "user_link" FROM "replies" `
      + `JOIN "users" ON "users"."id" = "replies"."author" `
      + `WHERE "post" = $1::integer AND "replies"."deleted" IS NULL `
      + `ORDER BY "replies"."created" DESC`

    client.query(query, [id], (err, res) => {
      if (err) return reject(err)

      resolve(res.rows.map(row => {
        row.created = (new Date(row.created)).getTime()

        row.author = {
          id: row.author,
          link: row.user_link,
          display_name: row.display_name,
        }

        delete row.deleted

        delete row.user_link
        delete row.display_name

        return row
      }))

      client.end()
    })
  })

  const result: Reply[] = await r

  return result
}
