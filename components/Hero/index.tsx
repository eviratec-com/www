import React from 'react'

import Link from 'next/link'

import styles from './Hero.module.css'

type MenuItem = {
  label: string
  link: string
}

export default function Hero() {
  const menu: MenuItem[] = [{
    label: 'About',
    link: '#about',
  }, {
  //   label: 'Contact',
  //   link: '#contact',
  // }, {
  //   label: 'Port Folio',
  //   link: '#folio',
  // }, {
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

      <div className={styles.next}>
        &#8595; &nbsp; About Me &nbsp; &#8595;
      </div>
    </div>
  )
}
