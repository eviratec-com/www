import React, { useCallback, useId, useState } from 'react'

import styles from './LoginForm.module.css'

interface Credentials {
  username: string
  password: string
}

export default function LoginForm() {
  const usernameInputId: string = useId()
  const passwordInputId: string = useId()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = useCallback((event): void => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    const _c: any = Object.fromEntries(formData.entries())
    const c: Credentials = {
      username: _c.username,
      password: _c.password,
    }

    console.log(c)

    setUsername(c.username)
    setPassword(c.password)
  }, [setUsername, setPassword])

  return (
    <div className={styles._}>
      <div className={styles['form-wrapper']}>
        <form onSubmit={handleSubmit}>
          <div className={styles['input-field']}>
            <label htmlFor={usernameInputId}>Username:</label>
            <input id={usernameInputId} name="username" />
          </div>

          <div className={styles['input-field']}>
            <label htmlFor={passwordInputId}>Password:</label>
            <input id={passwordInputId} name="password" type="password" />
          </div>

          <div className={styles['submit-button']}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>

      {'' !== username && (
        <p>Login attempted: {username}:{password}</p>
      )}
    </div>
  )
}
