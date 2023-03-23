import type { Feed } from '@/types/Feed'

import dbClient from '@/db'

export default async function fetchFeeds(): Promise<Feed[]> {
  const p: Promise<Feed[]> = new Promise((resolve, reject) => {
    const client: any = dbClient()

    client.connect()

    const query = `SELECT * FROM "feeds" WHERE "deleted" IS NULL ORDER BY "created" DESC`

    client.query(query, (err, res) => {
      if (err) return reject(err)

      resolve(res.rows)

      resolve(res.rows.map(row => {
        row.created = (new Date(row.created)).getTime()
        delete row.deleted
        return row
      }))

      client.end()
    })
  })

  const result: Feed[] = await p

  return result
}
