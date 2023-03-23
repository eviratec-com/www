import { useCallback, useContext, useState } from 'react'
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
      {
        id: newPost.id,
        author: newPost.author,
        content: newPost.content,
        created: newPost.created,
        published: newPost.published,
      },
      ...allPosts
    ])
  }, [allPosts, setAllPosts]);

  return (
    <>
      <Head>
        <title>{feed.name} - Eviratec</title>
        <meta name="description" content="TypeScript, React.js, Next.js, MongoDB/MySQL, PHP, and AWS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="rgba(77,0,153,1)" />
        <meta property="og:title" content="Callan Milne: Full-stack Developer" />
        <meta property="og:description" content="TypeScript, React.js, Next.js, MongoDB/MySQL, PHP, and AWS" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eviratec.com.au" />
        <meta property="og:image" content="https://www.eviratec.com.au/og.png" />
      </Head>

      <main className={styles.main}>
        <h1>{feed.name}</h1>

        {session.currentSession && session.currentSession.token &&
          <div className={styles['post-form-wrapper']}>
            <PostForm feed={slug.join('/')} onNewPost={onNewPost} />
          </div>
        }

        <div className={styles.posts}>
          {allPosts.map((post: Post, i: number) => {
            return (
              <div className={styles.post} key={i}>
                <div>{post.content}</div>
                <div className={styles['post-date']}>{postDate(post.created)}</div>
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
