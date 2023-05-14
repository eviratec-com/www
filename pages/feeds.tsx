import { useCallback, useContext, useEffect, useState } from 'react'
import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Feeds.module.css'

import fetchFeeds from '@/functions/fetchFeeds'

import Footer from '@/components/Footer'
import FeedPageHeading from '@/components/FeedPageHeading'

import SessionContext from '@/contexts/SessionContext'

import type { Feed } from '@/types/Feed'

interface Props {
  feeds: Feed[]
}

const FeedsPage: NextPage<Props> = ({ feeds }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  const session = useContext(SessionContext)

  const [allFeeds, setAllFeeds] = useState<Feed[]>(feeds)

  return (
    <>
      <Head>
        <title>Browse Feeds - Eviratec</title>
        <meta name="description" content="List of popular feeds on Eviratec" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="rgba(77,0,153,1)" />
        <meta property="og:title" content="Browse Feeds on Eviratec" />
        <meta property="og:description" content="List of popular feeds on Eviratec" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eviratec.com.au/feeds" />
        <meta property="og:image" content="https://www.eviratec.com.au/og.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@eviratec" />
        <meta name="twitter:creator" content="@eviratec" />
        <meta name="twitter:title" content="Browse Feeds - Eviratec" />
        <meta name="twitter:url" content="https://www.eviratec.com.au" />
        <meta name="twitter:description" content="List of popular feeds on Eviratec" />

      	<meta name="twitter:image" content="https://www.eviratec.com.au/og.png" />
      </Head>

      <main className={styles.main}>
        <FeedPageHeading>
          Browse Feeds
        </FeedPageHeading>

        <div className={styles.feeds}>
          <div className={styles.feed}>
            <Link prefetch={false} href={`/announcements`}>Announcements</Link>
          </div>

          {allFeeds.map((feed: Feed, i: number) => {
            if ('announcements' === feed.slug) {
              return // We're already showing the announcements feed
            }


            if (feed.slug.match(/\//g)) {
              return // Only show top-level feeds
            }

            return (
              <div className={styles.feed} key={feed.id}>
                <Link prefetch={false} href={`/${feed.slug}`}>{feed.name}</Link>
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

export default FeedsPage
