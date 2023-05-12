import Head from 'next/head'
import Link from 'next/link'
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

      <Hero homepage={true} />

      <main className={styles.main}>
        <div className={styles.section} id="about">
          <h2>About</h2>
          <About />
        </div>

        <div className={styles.section} id="profiles">
          <h2>Social Profiles</h2>
          <SocialProfiles />
        </div>

        <div className={`${styles.section} ${styles.contact}`} id="contact">
          <h2>Contact</h2>
          <p>
            MILNE, CALLAN PETER<br />
            ABN 62 842 988 455
          </p>

          <h3>By Phone</h3>
          <p>
            <Link href={`tel:+61482465983`}>
              +61 482 465 983
            </Link>
          </p>

          <h3>By Email</h3>
          <p>
            <Link href={`mailto:info@eviratec.com.au`}>
              info@eviratec.com.au
            </Link>
          </p>
        </div>

        <div className={`${styles.section} ${styles.contact}`} id="legal">
          <h2>Legal</h2>
          <ul>
            <li><Link href={`/terms`}>Terms of Use</Link></li>
            <li><Link href={`/privacy`}>Privacy Policy</Link></li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  )
}
