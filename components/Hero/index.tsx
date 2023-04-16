import { useContext } from 'react'
import React from 'react'

import Link from 'next/link'

import SessionContext from '@/contexts/SessionContext'

import styles from './Hero.module.css'

type MenuItem = {
  label: string
  link: string
}

export default function Hero() {
  const session = useContext(SessionContext)

  const menu: MenuItem[] = [{
    label: 'About',
    link: '#about',
  }, {
  //   label: 'Contact',
  //   link: '#contact',
  // }, {
    label: 'Portfolio',
    link: '#portfolio',
  }, {
    label: 'Experience',
    link: '#experience',
  }, {
    label: 'Social Profiles',
    link: '#profiles',
  }]

  return (
    <div className={styles._}>
      <div className={styles.main}>
        <div className={styles.text}>
          <p className={styles.primary}>Callan<br/>Milne</p>
          <p className={styles.secondary}>Full-stack<br/>Developer</p>
        </div>

        <div style={{flex: '1'}}></div>

        <div className={styles.navigation}>
          <ol>
            <li>
              <Link href={'/feeds'} scroll={false}>
                Feeds
              </Link>
            </li>

            {menu.map((item: MenuItem, index: number) => {
              return (
                <li key={index}>
                  <Link href={item.link} scroll={false}>
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
