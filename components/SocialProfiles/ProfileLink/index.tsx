import React from 'react'

import styles from './ProfileLink.module.css'

import type SocialProfile from '@/types/SocialProfile'

interface Opt {
  profile: SocialProfile
}

export default function ProfileLink({ profile }: Opt) {
  return (
    <div className={styles._}>
      <span>{profile.service.name}</span>
      <a href={profile.link} target="_blank">
        {profile.name}
      </a>
    </div>
  )
}
