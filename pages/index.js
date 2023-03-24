import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Example from '@/components/Example'
import Portfolio from '@/components/Folio'
import Experience from '@/components/Experience'
import SocialProfiles from '@/components/SocialProfiles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Callan Milne - Eviratec</title>
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

      <Hero />

      <main className={styles.main}>
        <div className={styles.section} id="about">
          <h3>About</h3>
          <About />
        </div>

        <div className={styles.section} id="portfolio">
          <h3>Portfolio</h3>
          <Portfolio />
        </div>

        <div className={styles.section} id="experience">
          <h3>Experience</h3>
          <Experience />
        </div>

        <div className={styles.section} id="profiles">
          <h3>Social Profiles</h3>
          <SocialProfiles />
        </div>
      </main>

      <Footer />
    </>
  )
}
