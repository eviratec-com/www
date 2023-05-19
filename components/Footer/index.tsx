import React, { useContext } from 'react'

import Link from 'next/link'

import LogoutLink from '@/components/LogoutLink'

import SessionContext from '@/contexts/SessionContext'

import styles from './Footer.module.css'

export default function Footer() {
  const session = useContext(SessionContext)

  return (
    <div className={styles._}>
      <div className={styles.lhs}>
        <div className={styles.developer}>
          ABN &nbsp;
          <Link
            prefetch={false}
            href="https://abr.business.gov.au/ABN/View/62842988455"
          >
            62 842 988 455
          </Link>
        </div>

        <div className={styles.links}>
          <Link prefetch={false} href={`/recent`}>Recent Posts</Link>
          <span className={styles.linkSeparator}> | </span>
          <Link prefetch={false} href={`/feeds`}>Browse Topics</Link>
        </div>
      </div>

      <div className={styles.spacer}></div>

      <div className={styles.rhs}>
        <div className={styles.copyright}>
          Copyright &copy; 2023
        </div>

        <div className={styles.login}>
          <div className={styles.links}>
            <>
              {(!session.currentSession || !session.currentSession.token) &&
                <>
                  <Link prefetch={false} href={`/login`}>Login</Link>
                  <span className={styles.linkSeparator}> | </span>
                  <Link prefetch={false} href={`/join`}>Create Account</Link>
                </>
              }
            </>

            <>
              {session.currentSession && session.currentSession.token &&
                <>
                  <Link prefetch={false} href={`/change-password`}>Change Password</Link>
                  <span className={styles.linkSeparator}> | </span>
                  <LogoutLink />
                </>
              }
            </>
          </div>
        </div>
      </div>
    </div>
  )
}
