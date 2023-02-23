import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Callan Milne &#12296;@eviratec&#12297;</title>
        <meta name="description" content="Callan Milne's Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <main className={styles.main}>
        <div>
          Coming Soon...
        </div>
      </main>
    </>
  )
}
