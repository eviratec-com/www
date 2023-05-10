const { Pool, Client } = require('pg')
const connectionString = process.env.DB_URI
//
// export default function dbClient() {
//   return new Client({
//     connectionString: process.env.DB_URI,
//   })
// }

// const pool = new Pool({
//   connectionString,
// })
//
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

// const { Pool } = require('pg')

const pool = new Pool({
  connectionString,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

export default async function dbClient() {
  // check out a single client
  const client = await pool.connect()
  return client
}

export function endPool() {
  return pool.end()
}
