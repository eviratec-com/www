export type User = {
  id: number
  dob: string
  username: string
  password: string
  email: string
  display_name: string
  link: string
  status: string
  created: number
  modified?: number
}

export type UserProfile = {
  id: number
  dob: string
  link: string
  status: string
  display_name: string
}

export type UserActivity = {
  user: number
  lastRenewal: number
}

export type UserRegistration = {
  email_address: string
  display_name: string
  username: string
  password: string
  dob: string
}

export type UserAttribute = {
  id?: number
  user: number
  attribute: {
    id: number
    label: string
  }
  value: string
  updated: number
  hidden?: number|null
}

export type ProfileField = {
  label: string
  value: string
}
