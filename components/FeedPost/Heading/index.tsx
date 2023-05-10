import React from 'react'

import styles from './Heading.module.css'

import type { Post } from '@/types/Post'

interface Props {
  post: Post
}

export default function Heading({ post }: Props) {
  return post.content.length > 0
    ? (
      <>{post.content}</>
    ) : (
      <span className={styles.noText}>Post by {post.author.display_name}</span>
    )
}
