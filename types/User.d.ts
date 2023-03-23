export type User = {
  id: number
  username: string
  password: string
  email: string
  display_name: string
  link: string
  created: number
}

export type UserProfile = {
  id: number
  link: string
  display_name: string
}
