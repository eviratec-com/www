import React, { ReactNode } from 'react'
import Image from 'next/image'
import styles from './FeedPost.module.css'

import AuthorLink from '@/components/AuthorLink'

import type { Post } from '@/types/Post'

interface Props {
  post: Post
}

export default function FeedPost({ post }: Props) {
  function postDate (input: number): string {
    const d = new Date(input)

    return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} at ${d.getHours()}:${d.getMinutes()}`
  }

  return (
    <div className={styles._}>
      <div className={styles.postContent}>{post.content}</div>

      {post.images && post.images.length > 0 &&
        <div className={`${styles.postImages} ${1 === post.images.length ? styles.fullSize : ''}`}>
          {post.images.map((imageUrl: string, i: number): ReactNode => {
            return (
              <div className={`${styles.postImage}`} key={i}>
                <div>
                  <Image
                    src={imageUrl}
                    alt={`User photo upload`}
                    fill
                    sizes={post.images.length > 2 ? `(max-width: 768px) 50vw,
                      400px` : '800px'}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      }

      <div className={styles.postDate}>
        {postDate(post.created)} | <AuthorLink author={post.author} />
      </div>
    </div>
  )
}
