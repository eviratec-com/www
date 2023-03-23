import { useCallback, useContext, useEffect, useState } from 'react'
import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Feed.module.css'

import fetchFeeds from '@/functions/fetchFeeds'

import Footer from '@/components/Footer'

import SessionContext from '@/contexts/SessionContext'

import type { Feed } from '@/types/Feed'

interface Props {
  feeds: Feed[]
}

const Feed: NextPage<Props> = ({ feeds }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  const session = useContext(SessionContext)

  const [allFeeds, setAllFeeds] = useState<Feed[]>(feeds)

  useEffect(() => {
    if (!session.currentSession || !session.currentSession.token) {
      router.push('/login')
    }
  }, [session])

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
        <h1>Feeds</h1>

        <div className={styles.posts}>
          {allFeeds.map((feed: Feed, i: number) => {
            return (
              <div className={styles.post} key={i}>
                <Link href={`/${feed.slug}`}>{feed.name}</Link>
              </div>
            )
          })}
        </div>
      </main>

      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ feeds: Feed[] }> = async (context) => {
  const feeds: Feed[] = await fetchFeeds()

  if (!feeds || feeds.length < 1) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      feeds,
    },
  }
}

export default Feed
