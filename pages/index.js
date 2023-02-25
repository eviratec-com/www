import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Example from '@/components/Example'
import Experience from '@/components/Experience'

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

        <div id="contact">
          <h3>Contact</h3>
          <Example />
        </div>

        <div id="folio">
          <h3>Port Folio</h3>
          <Example />
        </div>

        <div id="experience">
          <h3>Experience</h3>
          <Experience />
        </div>

        <div id="profiles">
          <h3>Social Profiles</h3>
          <Example />
        </div>
      </main>
    </>
  )
}
