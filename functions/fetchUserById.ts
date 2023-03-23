import type { User } from '@/types/User'

import dbClient from '@/db'

export default async function fetchUserById(input: number): Promise<User> {
  const p: Promise<User> = new Promise((resolve, reject) => {
    const client: any = dbClient()

    client.connect()

    const query = `SELECT * FROM "users" WHERE "id" = $1::integer`

    client.query(query, [input], (err, res) => {
      if (err) return reject(err)

      resolve(res.rows[0])

      client.end()
    })
  })

  const result: User = await p

  return result
}
