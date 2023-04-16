import '@/styles/globals.css'

import { useCallback, useMemo, useState } from 'react'
import type { AppProps } from 'next/app'

import Layout from '@/components/Layout'
import SessionContext from '@/contexts/SessionContext'

import type { Session } from '@/types/Session'

function App({ Component, pageProps }: AppProps) {
  const [currentSession, setCurrentSession] = useState<Session|null>(null)

  const login = useCallback((session) => {
    //storeToken(session.token)
    setCurrentSession(session)
  }, [setCurrentSession])

  const logout = useCallback(() => {
    setCurrentSession(null)
  }, [setCurrentSession])

  const contextValue = useMemo(() => ({
    currentSession,
    login,
    logout,
  }), [currentSession, login, logout])

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
