import type { UserProfile } from './User'

export type NewPost = {
  feed: string
  content: string
  images?: string[]
  link?: string
}

export type NewPostWithId = {
  feed: number
  author: number
  content: string
  images?: string[]
  link?: string
}

export type Post = {
  id: number
  author: UserProfile
  content: string
  created: number
  images?: string[]
  link?: string
  published: number|null
}
