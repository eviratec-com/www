import React from 'react'

import styles from './ProgressBar.module.css'

export default function ProgressBar() {
  return (
    <div className={styles._}>
      <div className={styles.circle}>
        <div></div>
      </div>
    </div>
  )
}
