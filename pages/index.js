import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import About from '@/components/About'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Callan Milne &#12296;@eviratec&#12297;</title>
        <meta name="description" content="Callan Milne's Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="rgba(77,0,153,1)" />
      </Head>

      <Hero />

      <main className={styles.main}>
        <div id="about">
          <h3>About</h3>
          <About />
        </div>
      </main>
    </>
  )
}
