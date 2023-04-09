import React, { ReactNode } from 'react'
import Image from 'next/image'
import styles from './FeedPost.module.css'

import AuthorLink from '@/components/AuthorLink'

import type { Post } from '@/types/Post'

interface Props {
  post: Post
}

function postImageLoader({ src, width, quality }) {
  if (!src) {
    return src
  }

  const size: string = width <= 100 ? 'thumbnail'
    : width <= 200 ? 'small'
    : width <= 400 ? 'medium'
    : 'large'

  const [
    protocol,
    domain,
    container,
    user,
    year,
    month,
    day,
    filename
  ] = src.replace(/\/\//g, '/').split('/')

  if (!year || Number(`${year}${month}${day}`) < 20230409) {
    return src
  }

  return src.replace('/eviratec-photos-ar/', `/${size}/`)
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
                    loader={postImageLoader}
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
