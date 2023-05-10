import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './FeedPost.module.css'

import postImageLoader from '@/functions/postImageLoader'
import fetchRepliesByPost from '@/functions/fetchRepliesByPost'

import FeedLink from '@/components/FeedLink'
import PostReply from '@/components/PostReply'
import ReplyForm from '@/components/ReplyForm'
import AuthorLink from '@/components/AuthorLink'
import ProgressBar from '@/components/ProgressBar'

import Heading from './Heading'
import Permalink from './Permalink'

import type { Post } from '@/types/Post'
import type { Reply } from '@/types/Reply'

interface Props {
  post: Post
  data?: {
    replies?: Reply[]
  }
  linkToPost?: boolean
  showFeedLink?: boolean
}

export default function FeedPost({ post, data, linkToPost, showFeedLink }: Props) {
  const [replies, setReplies] = useState<Reply[]>(data && data.replies || [])

  const [canHideComments, setCanHideComments] = useState<boolean>(data && data.replies ? false : true)

  const [commentsLoaded, setCommentsLoaded] = useState<boolean>(data && data.replies ? true : false)
  const [commentsVisible, setCommentsVisible] = useState<boolean>(!canHideComments)
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

  function imageClassName (imageUrl: string): string {
    if (!imageIsGif(imageUrl)) {
      return styles.postImage
    }

    return `${styles.postImage} ${styles.wideImage}`
  }

  function imageIsGif (imageUrl: string): boolean {
    return !!imageUrl.match(/\.gif/i)
  }

  return (
    <article className={styles._}>
      <header className={styles.postHeader}>
        {false === linkToPost &&
          <h2>
            <Heading post={post} />
          </h2>
        }

        {false !== linkToPost &&
          <h2>
            <Link href={`/post/${post.id}`}><Heading post={post} /></Link>
          </h2>
        }

          <div className={styles.headerLinks}>
            <Permalink post={post} />

            {true === showFeedLink &&
              <>
                <span>&nbsp;|&nbsp;</span>
                <FeedLink feed={post.feed} />
              </>
            }
          </div>
      </header>

      {post.images && post.images.length > 0 &&
        <section className={`${styles.postImages} ${1 === post.images.length ? styles.fullSize : ''}`}>
          {post.images.map((imageUrl: string, i: number): ReactNode => {
            const isGif: boolean = imageIsGif(imageUrl)

            return false === isGif && (
              <div className={`${imageClassName(imageUrl)}`} key={`${post.id}/img/${i}`}>
                <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div style={{display: 'flex', flex: 'none'}}>
                    <ProgressBar
                      bgClassName={styles.progressBg}
                      fgClassName={styles.progressFg}
                    />
                  </div>
                </div>
                <figure>
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
                </figure>
              </div>
            ) || (
              <div className={`${imageClassName(imageUrl)}`} key={`${post.id}/img/${i}`}>
                <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div style={{display: 'flex', flex: 'none'}}>
                    <ProgressBar
                      bgClassName={styles.progressBg}
                      fgClassName={styles.progressFg}
                    />
                  </div>
                </div>
                <figure>
                  <Image
                    src={imageUrl}
                    alt={`User photo upload`}
                    fill
                    unoptimized
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </figure>
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
        <AuthorLink author={post.author} prefix="By" />

        <span style={{
          display: 'flex',
          flex: '1',
        }}></span>

        <div className={styles.commentButtons}>
          {canHideComments &&
            <button className={styles.toggleCommentForm}
              onClick={toggleComments}>
              {commentsVisible ? 'Hide Replies' : 'Show Replies'}
            </button>
          }

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
