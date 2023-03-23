import type { Session } from '@/types/Session'

import dbClient from '@/db'

export default async function fetchSessionByToken(input: string): Promise<Session> {
  const p: Promise<Session> = new Promise((resolve, reject) => {
    const client: any = dbClient()

    client.connect()

    const query = `SELECT * FROM "sessions" WHERE "expiry" > `
      + `CURRENT_TIMESTAMP AND "token" = $1::text`

    client.query(query, [input], (err, res) => {
      if (err) return reject(err)

      resolve(res.rows[0])

      client.end()
    })
  })

  const result: Session = await p

  return result
}
