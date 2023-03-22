const { Pool, Client } = require('pg')
const connectionString = process.env.DB_URI

// const pool = new Pool({
//   connectionString,
// })
//
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

export default function dbClient() {
  return new Client({
    connectionString: process.env.DB_URI,
  })
}
