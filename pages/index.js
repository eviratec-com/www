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

        <div className={`${styles.section} ${styles.contact}`} id="contact">
          <h3>Contact</h3>
          <p>
            MILNE, CALLAN PETER<br />
            ABN 62 842 988 455
          </p>

          <h4>By Phone</h4>
          <p>
            <Link href={`tel:+61482465983`}>
              +61 482 465 983
            </Link>
          </p>

          <h4>By Email</h4>
          <p>
            <Link href={`mailto:info@eviratec.com.au`}>
              info@eviratec.com.au
            </Link>
          </p>

          <h4>In Person</h4>
          <p>
            21 CASTOR STREET,<br />
            CLIFTON BEACH, QLD<br />
            AUSTRALIA 4879
          </p>
        </div>

        <div className={`${styles.section} ${styles.contact}`} id="legal">
          <h3>Legal</h3>  
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
