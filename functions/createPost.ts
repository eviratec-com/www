import type { UserProfile } from '@/types/User'
import type { Post, NewPostWithId } from '@/types/Post'

import { v4 as uuidv4 } from 'uuid'

import dbClient from '@/db'

import fetchUserProfileById from './fetchUserProfileById'

interface NewFeedPost {
  post: number
  feed: number
}

interface FeedPost {
  post: number
  feed: number
  published: number
}

export default async function createPost(d: NewPostWithId): Promise<Post> {
  const p: Post = await insertPost(d)
  const feedPost: FeedPost = await insertFeedPost({
    post: p.id,
    feed: d.feed,
  })

  p.created = (new Date(p.created)).getTime()
  p.published = (new Date(feedPost.published)).getTime()

  return p
}

async function insertPost(d: NewPostWithId): Promise<Post> {
  const a: UserProfile = await fetchUserProfileById(d.author)
  const p: Promise<Post> = new Promise((resolve, reject) => {
    const client: any = dbClient()

    const fields: ([string, string, (string|number)]|[string, string, number])[] = [
      ["author", "integer", d.author],
      ["content", "text", d.content],
    ]

    if (d.images) {
      fields.push(["images", "text", d.images.join("\n")])
    }

    if (d.link) {
      fields.push(["link", "text", d.link])
    }

    const query: string = 'INSERT INTO "posts" ('
      + fields.map((f, i) => `"${f[0]}"`).join(', ')
      + `, "created") VALUES (`
      + fields.map((f, i) => `$${i+1}::${f[1]}`).join(', ')
      + `, CURRENT_TIMESTAMP) `
      + `RETURNING *`
    
    client.connect()

    client.query(query, [...fields.map(f => f[2])], (err, res) => {
      if (err) return reject(err)

      const result = {...res.rows[0]}

      result.author = a

      if (!result.link)
        delete result.link

      if (!result.images)
        delete result.images
      else
        result.images = result.images.split(/\n/)

      resolve(result)

      client.end()
    })
  })

  const result: Post = await p

  return result
}

async function insertFeedPost(d: NewFeedPost): Promise<FeedPost> {
  const p: Promise<FeedPost> = new Promise((resolve, reject) => {
    const client: any = dbClient()
    const query: string = `INSERT INTO "feed_posts" ("feed", "post", "published") `
      + `VALUES ($1::integer, $2::integer, CURRENT_TIMESTAMP) `
      + `RETURNING *`

    client.connect()

    client.query(query, [d.feed, d.post], (err, res) => {
      if (err) return reject(err)

      resolve(res.rows[0])

      client.end()
    })
  })

  const r: FeedPost = await p

  return {
    post: r.post,
    feed: r.feed,
    published: (new Date(r.published)).getTime(),
  }
}
