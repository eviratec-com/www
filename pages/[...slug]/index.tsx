import { ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Feed.module.css'

import fetchFeedBySlug from '@/functions/fetchFeedBySlug'
import fetchPostsByFeedSlug from '@/functions/fetchPostsByFeedSlug'

import Footer from '@/components/Footer'
import PostForm from '@/components/PostForm'
import AuthorLink from '@/components/AuthorLink'

import SessionContext from '@/contexts/SessionContext'

import type { Post } from '@/types/Post'
import type { Feed } from '@/types/Feed'

interface Props {
  posts: Post[]
  feed: Feed
}

const Feed: NextPage<Props> = ({ feed, posts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  const slug = (router.query.slug as string[]) || []

  const session = useContext(SessionContext)

  const [allPosts, setAllPosts] = useState<Post[]>(posts)

  function postDate (input: number): string {
    const d = new Date(input)

    return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} at ${d.getHours()}:${d.getMinutes()}`
  }

  const onNewPost = useCallback((newPost: Post): void => {
    setAllPosts([
      newPost,
      ...allPosts
    ])
  }, [allPosts, setAllPosts]);

  useEffect(() => {
    setAllPosts([...posts])
  }, [posts])

  return (
    <>
      <Head>
        <title>{feed.name} - Eviratec</title>
        <meta name="description" content={`${feed.name} on Eviratec`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="rgba(77,0,153,1)" />
        <meta property="og:site_name" content="Eviratec" />
        <meta property="og:title" content={feed.name} />
        <meta property="og:description" content={`${feed.name} on Eviratec`} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`https://www.eviratec.com.au/${slug.join('/')}`} />
        <meta property="og:image" content="https://www.eviratec.com.au/og.png" />
      </Head>

      <main className={styles.main}>
        <h1>{feed.name}</h1>

        {session.currentSession && session.currentSession.token &&
          <div className={styles.postFormWrapper}>
            <PostForm feed={slug.join('/')} onNewPost={onNewPost} />
          </div>
        }

        <div className={styles.posts}>
          {allPosts.map((post: Post, i: number) => {
            return (
              <div className={styles.post} key={i}>
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
          })}
        </div>
      </main>

      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ feed: Feed, posts: Post[] }> = async (context) => {
  const slug: string[] = context.params.slug as string[] || []

  const feed: Feed = await fetchFeedBySlug(slug.join('/'))

  if (!feed) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const posts: Post[] = await fetchPostsByFeedSlug(slug.join('/'))

  feed.created = (new Date(feed.created)).getTime()

  return {
    props: {
      feed,
      posts,
    },
  }
}

export default Feed
