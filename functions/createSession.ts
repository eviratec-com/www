import type { Session } from '@/types/Session'

import { v4 as uuidv4 } from 'uuid'

import dbClient from '@/db'

export interface NewSession {
  user: number
}

export default async function createSession(d: NewSession): Promise<Session> {
  const p: Promise<Session> = new Promise((resolve, reject) => {
    const client: any = dbClient()
    const query: string = `INSERT INTO "sessions" ("user", "token", "created", "expiry") `
      + `VALUES ($1::integer, $2::text, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + interval '24 hours') `
      + `RETURNING *`

    client.connect()

    client.query(query, [d.user, uuidv4()], (err, res) => {
      if (err) return reject(err)

      resolve(res.rows[0])

      client.end()
    })
  })

  const result: Session = await p

  return result
}
