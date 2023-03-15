import React from 'react'

import Link from 'next/link'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles._}>
      <div className={styles.developer}>
        Created by <Link href="https://www.eviratec.com.au">Callan Milne</Link>
      </div>

      <div className={styles.spacer}></div>

      <div className={styles.copyright}>
        Copyright &copy; 2023
      </div>
    </div>
  )
}
