import type { Post } from '@/types/Post'

import { v4 as uuidv4 } from 'uuid'

import dbClient from '@/db'

export interface NewPost {
  feed: number
  author: number
  content: string
}

interface NewFeedPost {
  post: number
  feed: number
}

interface FeedPost {
  post: number
  feed: number
  published: number
}

export default async function createPost(d: NewPost): Promise<Post> {
  const p: Post = await insertPost(d)
  const feedPost: FeedPost = await insertFeedPost({
    post: p.id,
    feed: d.feed,
  })

  p.created = (new Date(p.created)).getTime()
  p.published = (new Date(feedPost.published)).getTime()

  return p
}

async function insertPost(d: NewPost): Promise<Post> {
  const p: Promise<Post> = new Promise((resolve, reject) => {
    const client: any = dbClient()
    const query: string = `INSERT INTO "posts" ("author", "content", "created") `
      + `VALUES ($1::integer, $2::text, CURRENT_TIMESTAMP) `
      + `RETURNING *`

    client.connect()

    client.query(query, [d.author, d.content], (err, res) => {
      if (err) return reject(err)

      resolve(res.rows[0])

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
