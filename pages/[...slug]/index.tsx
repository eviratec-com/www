import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Footer from '@/components/Footer'

interface Props {

}

const Feed: NextPage<Props> = (props: Props) => {
  const router = useRouter()
  const slug = (router.query.slug as string[]) || []

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
        Feed {slug.join('/')}
      </main>

      <Footer />
    </>
  )
}

export default Feed
