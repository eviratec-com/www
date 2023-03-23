import React, { useCallback, useContext, useId, useState } from 'react'
import { useRouter } from 'next/navigation';

import styles from './LoginForm.module.css'

import SessionContext from '@/contexts/SessionContext'

import type { Credentials, Session } from '@/types/Session'

export default function LoginForm() {
  const router = useRouter()

  const session = useContext(SessionContext)

  const usernameInputId: string = useId()
  const passwordInputId: string = useId()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleSubmit = useCallback((event): void => {
    event.preventDefault()

    setError('')

    const c: Credentials = {
      username: username,
      password: password,
    }

    setUsername(c.username)
    setPassword(c.password)

    fetch('/api/login', { method: 'POST', body: JSON.stringify(c), headers: {'Content-Type': 'application/json'} })
      .then((result) => {
        if (400 === result.status) {
          return result.json().then(json => {
            setSuccess(false)
            setError(json.message)
          })
        }

        result.json().then(json => {
          setSuccess(true)
          session.login(json)
          router.push('/feeds')
        })
      })
      .catch((err) => {
        setSuccess(false)
        setError(err.message)
      })
  }, [username, password, session])

  return (
    <div className={styles._}>
      <div className={styles['form-wrapper']}>
        <form name="login" onSubmit={handleSubmit}>
          <div className={styles['input-field']}>
            <label htmlFor={usernameInputId}>Username:</label>
            <input
              id={usernameInputId}
              value={username}
              name="username"
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className={styles['input-field']}>
            <label htmlFor={passwordInputId}>Password:</label>
            <input
              id={passwordInputId}
              value={password}
              name="password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className={styles['submit-button']}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>

      {success && (
        <p>Login success! Redirecting...</p>
      )}

      {error && (
        <p>Error: {error}</p>
      )}
    </div>
  )
}
