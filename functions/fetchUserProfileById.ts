import type { UserProfile } from '@/types/User'

import dbClient from '@/db'

export default async function fetchUserProfileById(input: number): Promise<UserProfile> {
  const p: Promise<UserProfile> = new Promise((resolve, reject) => {
    const client: any = dbClient()

    client.connect()

    const query = `SELECT "id", "link", "display_name" FROM "users" `
      + `WHERE "id" = $1::integer`

    client.query(query, [input], (err, res) => {
      if (err) return reject(err)

      resolve(res.rows[0])

      client.end()
    })
  })

  const result: UserProfile = await p

  return result
}
