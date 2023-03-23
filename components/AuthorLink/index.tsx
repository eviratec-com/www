import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import type { UserProfile } from '@/types/User'

import styles from './AuthorLink.module.css'

export interface Props {
  author: UserProfile
}

export default function AuthorLink({ author }: Props) {
  return (
    <div className={styles._}>
      By <Link href={author.link}>{author.display_name}</Link>
    </div>
  )
}
