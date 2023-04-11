import React, { ReactNode } from 'react'
import Image from 'next/image'
import styles from './FeedPost.module.css'

import FeedLink from '@/components/FeedLink'
import AuthorLink from '@/components/AuthorLink'

import type { Post } from '@/types/Post'

interface Props {
  post: Post
  showFeedLink?: boolean
}

function postImageLoader({ src, width, quality }) {
  console.log(width)
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

  if (!year || Number(`${year}${month.padStart(2, '0')}${day.padStart(2, '0')}`) < 20230410) {
    return src
  }

  return src.replace(/\/eviratec\-photos\-ar\//, `/${size}`)
}

export default function FeedPost({ post, showFeedLink }: Props) {
  function postDate (input: number): string {
    const d = new Date(input)

    const _date: string = String(d.getDate())
    const _month: string = String(d.getMonth()+1)
    const _year: string = String(d.getFullYear())

    const _hours: string = String(d.getHours()).padStart(2, '0')
    const _minutes: string = String(d.getMinutes()).padStart(2, '0')

    return `${_date}/${_month}/${_year} at ${_hours}:${_minutes}`
  }

  return (
    <article className={styles._}>
      <header className={styles.postHeader}>
        {true === showFeedLink &&
          <FeedLink feed={post.feed} />
        }
        <h2>{post.content}</h2>
      </header>

      {post.images && post.images.length > 0 &&
        <section className={`${styles.postImages} ${1 === post.images.length ? styles.fullSize : ''}`}>
          {post.images.map((imageUrl: string, i: number): ReactNode => {
            return (
              <div className={`${styles.postImage}`} key={i}>
                <div>
                  <Image
                    loader={postImageLoader}
                    src={imageUrl}
                    alt={`User photo upload`}
                    fill
                    sizes={post.images.length >= 2 ? `(max-width: 768px) 50vw,
                      400px` : '800px'}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            )
          })}
        </section>
      }

      <footer className={styles.postFooter}>
        <time dateTime={(new Date(post.created)).toISOString()}>
          {postDate(post.created)}
        </time>
        <span>&nbsp;|&nbsp;</span>
        <AuthorLink author={post.author} />
      </footer>
    </article>
  )
}
