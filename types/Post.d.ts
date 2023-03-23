import type { UserProfile } from './User'

export type Post = {
  id: number
  author: UserProfile
  content: string
  created: number
  published: number|null
}
