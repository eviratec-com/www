import '@/styles/globals.css'

import { useCallback, useEffect, useMemo, useState } from 'react'
import type { AppProps } from 'next/app'

import Layout from '@/components/Layout'
import SessionContext from '@/contexts/SessionContext'

import type { Session } from '@/types/Session'

interface Props extends AppProps {
  session?: Session
}

function App({ Component, pageProps }: Props) {
  const [currentSession, setCurrentSession] = useState<Session|null>(null)

  const login = useCallback((session) => {
    //storeToken(session.token)
    setCurrentSession(session)
  }, [setCurrentSession])

  const logout = useCallback(() => {
    (async () => {
      const r = await fetch('/api/logout', {method: 'POST'})
      if (200 !== r.status) {
        return
      }

      setCurrentSession(null)
    })()
  }, [setCurrentSession])

  const contextValue = useMemo(() => ({
    currentSession,
    login,
    logout,
  }), [currentSession, login, logout])

  // Check for session (uses cookies)
  useEffect(() => {
    (async () => {
      const r = await fetch('/api/session')
      if (200 !== r.status) {
        return
      }

      const s: Session = await r.json()
      setCurrentSession(s)
    })()
  }, [])

  return (
    <>
      <SessionContext.Provider value={contextValue}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionContext.Provider>
    </>
  )
}

export default App
