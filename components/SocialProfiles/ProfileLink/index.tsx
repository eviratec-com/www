import React from 'react'

import styles from './ProfileLink.module.css'

import type SocialProfile from '@/types/SocialProfile'

interface Opt {
  profile: SocialProfile
}

export default function ProfileLink({ profile }: Opt) {
  return (
    <div className={styles._}>
      <span className={styles.service}>{profile.service.name}</span>
      <a href={profile.link} target="_blank" rel="noreferrer">
        <span className={styles['screen-name']}>{profile.name}</span>
      </a>
    </div>
  )
}
