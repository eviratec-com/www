import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Login.module.css'

import Footer from '@/components/Footer'
import LoginForm from '@/components/LoginForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Member Login - Eviratec</title>
        <meta name="description" content="Eviratec Member Login Form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="rgba(77,0,153,1)" />
        <meta property="og:title" content="Eviratec Member Login" />
        <meta property="og:description" content="Eviratec Member Login Form" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eviratec.com.au/login" />
        <meta property="og:image" content="https://www.eviratec.com.au/og.png" />
      </Head>

      <main className={styles.main}>
        <h1>Member Login</h1>

        <LoginForm />
      </main>

      <Footer />
    </>
  )
}
