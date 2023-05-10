import type { Feed } from '@/types/Feed'

import dbClient from '@/db'

export default async function fetchFeeds(): Promise<Feed[]> {
  const client: any = await dbClient() // check out a single client
  const p: Promise<Feed[]> = new Promise((resolve, reject) => {
    const query = `SELECT * FROM "feeds" WHERE "deleted" IS NULL ORDER BY "name" ASC`

    client.query(query, (err, res) => {
      if (err) {
        reject(err)
        client.release() // release the client
        return
      }

      resolve(res.rows.map(row => {
        row.created = (new Date(row.created)).getTime()
        delete row.deleted
        return row
      }))

      client.release() // release the client
    })
  })

  const result: Feed[] = await p

  return result
}
