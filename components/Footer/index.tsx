import React, { useContext } from 'react'

import Link from 'next/link'

import SessionContext from '@/contexts/SessionContext'

import styles from './Footer.module.css'

export default function Footer() {
  const session = useContext(SessionContext)

  return (
    <div className={styles._}>
      <div className={styles.developer}>
        Created by <Link href="https://www.eviratec.com.au">Callan Milne</Link>
      </div>

      <div className={styles.spacer}></div>

      <div className={styles.rhs}>
        <div className={styles.copyright}>
          Copyright &copy; 2023
        </div>

        <div className={styles.login}>
          <>
            {(!session.currentSession || !session.currentSession.token) &&
              <Link href={`/login`}>Login</Link>
            }
          </>

          <>
            {session.currentSession && session.currentSession.token &&
              <Link href={`/`}>Logout</Link>
            }
          </>
        </div>
      </div>
    </div>
  )
}
