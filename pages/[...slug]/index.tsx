import { useCallback, useState } from 'react'
import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Feed.module.css'

import fetchPostsByFeedSlug from '@/functions/fetchPostsByFeedSlug'

import Footer from '@/components/Footer'
import PostForm from '@/components/PostForm'

import type { Post } from '@/types/Post'

interface Props {
  posts: Post[]
}

const Feed: NextPage<Props> = ({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  const slug = (router.query.slug as string[]) || []

  const [allPosts, setAllPosts] = useState<Post[]>(posts)

  function postDate (input: number): string {
    const d = new Date(input)

    return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} at ${d.getHours()}:${d.getMinutes()}`
  }

  const onNewPost = useCallback((newPost: Post): void => {
    setAllPosts([newPost, ...posts])
  }, [posts, setAllPosts]);

  return (
    <>
      <Head>
        <title>Callan Milne &#12296;@eviratec&#12297;</title>
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
        <h1>Feed {slug.join('/')}</h1>

        <div className={styles['post-form-wrapper']}>
          <PostForm onNewPost={onNewPost} />
        </div>

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

export const getServerSideProps: GetServerSideProps<{ posts: Post[] }> = async (context) => {
  const slug: string[] = context.params.slug as string[] || []

  const posts: Post[] = await fetchPostsByFeedSlug(slug.join('/'))

  if (!posts || posts.length < 1) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      posts,
    },
  }
}

export default Feed
