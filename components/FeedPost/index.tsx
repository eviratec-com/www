import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './FeedPost.module.css'

import fetchRepliesByPost from '@/functions/fetchRepliesByPost'

import FeedLink from '@/components/FeedLink'
import PostReply from '@/components/PostReply'
import ReplyForm from '@/components/ReplyForm'
import AuthorLink from '@/components/AuthorLink'
import ProgressBar from '@/components/ProgressBar'

import type { Post } from '@/types/Post'
import type { Reply } from '@/types/Reply'

interface Props {
  post: Post
  showFeedLink?: boolean
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

  if (!year || Number(`${year}${month.padStart(2, '0')}${day.padStart(2, '0')}`) < 20230410) {
    return src
  }

  return src.replace(/\/eviratec\-photos\-ar\//, `/${size}`)
}

export default function FeedPost({ post, showFeedLink }: Props) {
  const [replies, setReplies] = useState<Reply[]>([])

  const [commentsLoaded, setCommentsLoaded] = useState<boolean>(false)
  const [commentsVisible, setCommentsVisible] = useState<boolean>(false)
  const [commentFormVisible, setCommentFormVisible] = useState<boolean>(false)

  const toggleCommentForm = useCallback((event): void => {
    event.preventDefault()
    setCommentFormVisible(!commentFormVisible)
  }, [commentFormVisible, setCommentFormVisible]);

  const toggleComments = useCallback((event): void => {
    event.preventDefault()
    setCommentsVisible(!commentsVisible)
  }, [commentsVisible, setCommentsVisible]);

  const handleNewReply = useCallback((newReply: Reply): void => {
    setReplies([
      newReply,
      ...replies,
    ])
  }, [replies, setReplies])

  function postDate (input: number): string {
    const d = new Date(input)

    const _date: string = String(d.getDate())
    const _month: string = String(d.getMonth()+1)
    const _year: string = String(d.getFullYear())

    const _hours: string = String(d.getHours()).padStart(2, '0')
    const _minutes: string = String(d.getMinutes()).padStart(2, '0')

    return `${_date}/${_month}/${_year} at ${_hours}:${_minutes}`
  }

  useEffect((): void => {
    if (true !== commentsVisible)
      return

    if (replies.length > 0)
      return

    fetch(`/api/posts/${post.id}/replies`, { method: 'GET' })
      .then((result) => {
        if (400 === result.status) {
          return result.json().then(json => {
            console.log(`http/1.1 400 on fetch: /api/posts/${post.id}/replies`)
            console.log(json)
          })
        }

        result.json().then(replies => {
          setReplies([...replies])
          setCommentsLoaded(true)
        })
      })
      .catch((err) => {
        console.log(`error on fetch: /api/posts/${post.id}/replies`)
        console.log(err)
      })
  }, [replies.length, post.id, commentsVisible])

  return (
    <article className={styles._}>
      <header className={styles.postHeader}>
        <h2>{post.content}</h2>

        {true === showFeedLink &&
          <FeedLink feed={post.feed} />
        }
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

        <span style={{
          display: 'flex',
          flex: '1',
        }}></span>

        <div className={styles.commentButtons}>
          <button className={styles.toggleCommentForm}
            onClick={toggleComments}>
            {commentsVisible ? 'Hide Replies' : 'Show Replies'}
          </button>

          <button className={styles.toggleCommentForm}
            onClick={toggleCommentForm}>
            {commentFormVisible ? 'Discard Reply' : 'Reply'}
          </button>
        </div>
      </footer>

      {commentFormVisible &&
        <section className={styles.commentForm}>
          <ReplyForm post={post} onNewReply={handleNewReply} />
        </section>
      }

      {commentsVisible &&
        <section className={styles.comments}>
          {replies.length > 0 && replies.map((reply: Reply, i: number) => {
            return (
              <div className={styles.comment} key={i}>
                <PostReply reply={reply} />
              </div>
            )
          })}

          {!commentsLoaded &&
            <div className={styles.loadingReplies}>
              <ProgressBar />
              <p>Loading replies...</p>
            </div>
          }

          {commentsLoaded && replies.length === 0 &&
            <div className={styles.noticeNoReplies}>
              <p>No replies, yet.</p>
            </div>
          }
        </section>
      }
    </article>
  )
}
