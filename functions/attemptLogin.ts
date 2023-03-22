import type { Credentials, Session } from '@/types/Session'

export default async function attemptLogin(c: Credentials): Promise<Session> {

  // Fetch user by username

  // Check password matches hash

  // Create session

  return {
    id: 0,
    user: 0,
    token: `${c.username}:/:${c.password}`,
    created: 0,
  }
}
