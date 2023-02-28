import React from 'react'

import { useState } from 'react'

import ProfileLink from './ProfileLink'

import type SocialProfile from '@/types/SocialProfile'

import styles from './SocialProfiles.module.css'

type Org = {
  icon: string
  link: string
  name: string
}

export default function SocialProfiles() {
  const [profiles] = useState<SocialProfile[]>([{
    service: {
      icon: '',
      link: 'https://linkedin.com',
      name: 'LinkedIn',
    },
    link: 'https://linkedin.com/in/calmilne',
    name: 'calmilne'
  }, {
    service: {
      icon: '',
      link: 'https://www.facebook.com',
      name: 'Facebook',
    },
    link: 'https://www.facebook.com/subspacemonkey',
    name: 'subspacemonkey'
  }, {
    service: {
      icon: '',
      link: 'https://www.instagram.com',
      name: 'Instgram',
    },
    link: 'https://www.facebook.com/callan.milne',
    name: 'callan.milne'
  }, {
    service: {
      icon: '',
      link: 'https://www.twitter.com',
      name: 'Twitter',
    },
    link: 'https://www.facebook.com/eviratec',
    name: '@eviratec'
  }])

  const [coderProfiles] = useState<SocialProfile[]>([{
    service: {
      icon: '',
      link: 'https://www.github.com',
      name: 'GitHub',
    },
    name: 'eviratec',
    link: 'https://github.com/eviratec',
  }, {
    service: {
      icon: '',
      link: 'https://www.github.com',
      name: 'GitHub',
    },
    link: 'https://github.com/luminous-patterns',
    name: 'luminous-patterns',
  }, {
    service: {
      icon: '',
      link: 'https://codepen.io',
      name: 'CodePen',
    },
    link: 'https://codepen.io/eviratec',
    name: 'eviratec',
  }])

  return (
    <div className={styles._}>
      <div className={styles.col}>
        <ol className={styles['link-list']}>
          {profiles.map((profile: SocialProfile, i: number) => {
            return (
              <li key={i}>
                <ProfileLink profile={profile} />
              </li>
            )
          })}
        </ol>
      </div>

      <div className={styles.col}>
        <ol className={styles['link-list']}>
          {coderProfiles.map((profile: SocialProfile, i: number) => {
            return (
              <li key={i}>
                <ProfileLink profile={profile} />
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
