import React from 'react'

import Link from 'next/link'

import styles from './Toolbar.module.css'

export default function Toolbar() {
  return (
    <div className={styles._}>
      <div className={styles.logo}>
        <Link href='/' scroll={true}>Eviratec</Link>
      </div>

      <div className={styles.spacer}></div>

      <div className={styles['menu-btn']}>
        <Link href='/' scroll={true}>
          &#9776;
        </Link>
      </div>
    </div>
  )
}
