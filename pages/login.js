import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Login.module.css'

import Footer from '@/components/Footer'
import LoginForm from '@/components/LoginForm'

export default function Home() {
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
        <LoginForm />
      </main>

      <Footer />
    </>
  )
}
