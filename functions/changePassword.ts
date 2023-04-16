import { v4 as uuidv4 } from 'uuid'

import dbClient from '@/db'

export default async function changePassword(
  user: number,
  newPassword: string
): Promise<boolean> {
  const result: Promise<boolean> = new Promise((resolve, reject) => {
    const client: any = dbClient()

    const query: string = 'UPDATE "users" SET "password" = $2::text, '
      + '"modified" = CURRENT_TIMESTAMP WHERE "id" = $1::integer RETURNING *'

    client.connect()

    client.query(query, [user, newPassword], (err, res) => {
      if (err) return reject(err)

      resolve(true)

      client.end()
    })
  })

  return await result
}
