import { useCallback, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'

import Link from 'next/link'

import LogoutLink from '@/components/LogoutLink'

import SessionContext from '@/contexts/SessionContext'

import styles from './Hero.module.css'

type MenuItem = {
  label: string
  link: string
}

const ANON_MENU_ITEMS: MenuItem[] = [{
  label: 'Login',
  link: '/login',
}, {
  label: 'Sign-up',
  link: '/join',
}]

const USER_MENU_ITEMS: MenuItem[] = [{
  label: 'Messages',
  link: '/conversations',
}]

const MENU_ITEMS: MenuItem[] = [{
  label: 'Recent Posts',
  link: '/recent',
}, {
  label: 'Browse Topics',
  link: '/feeds',
}, {
  label: 'Social Platform',
  link: '/social-network-platform',
}]

interface Props {
  onClick?: (e: any) => void
  homepage?: boolean
}

export default function Hero({ onClick, homepage }: Props) {
  const router = useRouter()
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [menuItems, setMenuItems] = useState<MenuItem[]>([...MENU_ITEMS])
  const session = useContext(SessionContext)

  const logout = useCallback((event) => {
    event.preventDefault()
    session.logout()
    router.push('/')
  }, [session, router])

  useEffect(() => {
    const _loggedIn: boolean = session && session.currentSession
      && session.currentSession.token

    setLoggedIn(_loggedIn)

    if (_loggedIn) {
      const userMenuItems: MenuItem[] = [
        ...USER_MENU_ITEMS,
        {
          label: 'My Profile',
          link: '/me',
        },
      ]

      return setMenuItems([
        ...userMenuItems,
        ...MENU_ITEMS,
      ])
    }

    setMenuItems([
      ...ANON_MENU_ITEMS,
      ...MENU_ITEMS,
    ])
  }, [session, setLoggedIn])

  return (
    <div className={styles._}>
      <div className={styles.main}>
        <div className={styles.logo}></div>

        <div className={styles.text}>
          {homepage && (
            <h1 className={styles.primary}>Eviratec</h1>
          ) || (
            <p className={styles.primary}>Eviratec</p>
          )}
          <p className={styles.secondary}>Social Media</p>
        </div>

        <div style={{flex: '1'}}></div>

        <div className={styles.navigation}>
          <ol>
            {loggedIn &&
              <li>
                <Link prefetch={false} href={`/`} scroll={true} onClick={e => { logout(e); onClick && onClick(e) }}>
                  Logout
                </Link>
              </li>
            }

            {menuItems.map((item: MenuItem, index: number) => {
              return (
                <li key={`menuitem-${index}`}>
                  <Link prefetch={false} href={item.link} scroll={true} onClick={e => onClick && onClick(e)}>
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}
