import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '@/styles/SocialNetworkPlatform.module.css'

import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import TextBlock from '@/components/TextBlock'
import SocialProfiles from '@/components/SocialProfiles'
import FeedPageHeading from '@/components/FeedPageHeading'

const META_TITLE = '\
Launch Your Own Social Network | Eviratec Social Platform'

const META_DESCRIPTION = '\
Launch your own public or private Social Network. Complete with photo uploads, \
user registration, private messaging, public feeds (aka boards, or forums), \
custom profile fields, reserved usernames, custom domains, and BYO branding.'

const META_OG_IMAGE = '\
https://www.eviratec.com.au/og-social-platform.png'

export default function SocialNetworkPlatform() {
  return (
    <>
      <Head>
        <title>{META_TITLE}</title>
        <meta name="description" content={`${META_DESCRIPTION}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="rgba(77,0,153,1)" />
        <meta property="og:title" content={`${META_TITLE}`} />
        <meta property="og:description" content={`${META_DESCRIPTION}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eviratec.com.au/social-network-platform" />
        <meta property="og:image" content={`${META_OG_IMAGE}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@eviratec" />
        <meta name="twitter:creator" content="@eviratec" />
        <meta name="twitter:title" content={`${META_TITLE}`} />
        <meta name="twitter:url" content="https://www.eviratec.com.au" />
        <meta name="twitter:description" content={`${META_DESCRIPTION}`} />

      	<meta name="twitter:image" content={`${META_OG_IMAGE}`} />
      </Head>

      <main className={styles.main}>
        <h1>
          Eviratec Social Platform
        </h1>

        <div className={styles.dblSection}>
          <section className={`${styles.section} ${styles.imgSection}`}>
            <figure className={styles.mobileScreenshot}>
              <div className={styles.imgWrapper}>
                <Image
                  src={`https://eviratecphotos.blob.core.windows.net/assets/marketing/promotional/ESP_20230517/eviratec-com-au-signup.jpg`}
                  alt={`A screenshot of the signup form, on a mobile device, in light mode, on Eviratec Social Network.`}
                  style={{
                    objectFit: 'cover',
                  }}
                  unoptimized
                  fill
                />
              </div>

              <figcaption>
                Mobile signup form, in light mode.
              </figcaption>
            </figure>

            <figure className={styles.mobileScreenshot}>
              <div className={styles.imgWrapper}>
                <Image
                  src={`https://eviratecphotos.blob.core.windows.net/assets/marketing/promotional/ESP_20230517/eviratec-com-au-feed.jpg`}
                  alt={`A screenshot of a Feed, on a mobile device, in light mode, on Eviratec Social Network.`}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                  unoptimized
                  fill
                />
              </div>

              <figcaption>
                Mobile Feed/Topic page, in light mode.
              </figcaption>
            </figure>

            <figure className={styles.mobileScreenshot}>
              <div className={styles.imgWrapper}>
                <Image
                  src={`https://eviratecphotos.blob.core.windows.net/assets/marketing/promotional/ESP_20230517/eviratec-com-au-mobile-profile.jpg`}
                  alt={`A screenshot of a User Profile, on a mobile device, in light mode, on Eviratec Social Network.`}
                  style={{
                    objectFit: 'cover',
                  }}
                  unoptimized
                  fill
                />
              </div>

              <figcaption>
                Mobile User Profile page, in light mode.
              </figcaption>
            </figure>
          </section>

          <section className={styles.section}>
            <TextBlock>
              <p>
                Launch your own public or private Social Network. Complete with
                photo uploads, user registration, private messaging, public feeds
                (aka boards, or forums), custom profile fields, reserved
                usernames, custom domains, and BYO branding.
              </p>
            </TextBlock>
          </section>
        </div>

        <section className={styles.section}>
          <TextBlock>
            <h2 style={{textAlign: 'center'}}>
              Share &amp; Connect
            </h2>
          </TextBlock>
        </section>

        <div className={`${styles.dblSection} ${styles.reverse}`}>
          <section className={`${styles.section} ${styles.desktopImgSection}`}>
            <figure className={styles.desktopScreenshot}>
              <div className={styles.imgWrapper}>
                <Image
                  src={`https://eviratecphotos.blob.core.windows.net/assets/marketing/promotional/ESP_20230517/eviratec-net-desktop-hero.png`}
                  alt={`A screenshot of the homepage hero on Eviratec Network (desktop) (www.eviratec.net). Showing 50 link categories, with item counts. Homepage title reads Eviratec Net, Web Directory.`}
                  style={{
                    objectFit: 'contain',
                  }}
                  unoptimized
                  fill
                />
              </div>

              <figcaption>
                Homepage of Eviratec Network link directory (www.eviratec.net)
              </figcaption>
            </figure>
          </section>

          <section className={styles.section}>
            <TextBlock>
              <p>
                Create your own place online to share memories, make plans,
                and connect with your friends, family, staff, or team members.
              </p>

              <p>
                Near, or far: Make your own place to connect, with the people
                you care about.
              </p>
            </TextBlock>
          </section>
        </div>

        <section className={styles.section}>
          <TextBlock>
            <h2 style={{textAlign: 'center'}}>
              Features
            </h2>
          </TextBlock>
        </section>

        <section className={`${styles.section} ${styles.featuresSection}`}>
          <TextBlock>
            <div className={styles.twoCol}>
              <div className={styles.col}>
                <h3>Platform Features</h3>

                <ul>
                  <li>BYO/Custom domain name</li>
                  <li>Free sub-domain<br /><span>you.eviratecsocial(.online|.life)</span></li>
                  <li>BYO branding<br /><span>(text, logo, &amp; colours)</span></li>
                  <li>Reserved usernames</li>
                  <li>User photo uploads<br /><span>(up to 50MB per file)</span></li>
                  <li>Automatic Photo Processing<br /><span>Automatic optimise+resize photos on user upload</span></li>
                  <li>Custom Profile Fields</li>
                  <li>Bcrypt Password Security<br /><span>Passwords stored using one-way encryption</span></li>
                  <li>Custom Account Status<br /><span>(e.g. Unverified, Admin, ID Verified)</span></li>
                  <li>Signup Age Limit</li>
                </ul>

                <h3>All Plans Include</h3>

                <ul>
                  <li>100GB Storage</li>
                  <li>1TB Transfer (outbound) per month</li>
                  <li>Fully-managed hosting</li>
                  <li>Fault-tolerant infrastructure</li>
                  <li>Daily backups</li>
                  <li>Set-up in 2 business days<br /><span>(or 20% discount for 12-months)</span></li>
                  <li>Free Technical Support</li>
                </ul>

                <h3>Technical Support</h3>

                <ul>
                  <li>Phone Technical Support<br />Monday to Friday: 9AM to 5PM<br /><span>Aus Eastern Standard Time (AEST)</span></li>
                </ul>
              </div>
              
              <div className={styles.col}>
                <div className={styles.plan}>
                  <h3>Lite</h3>

                  <div className={styles.price}>
                    <span>&#x24;15</span>
                    <span>Per month</span>
                    <span>Including GST</span>
                  </div>

                  <ul>
                    <li>5 Categories</li>
                    <li>5 User Accounts</li>
                  </ul>
                </div>

                <div className={styles.plan}>
                  <h3>Standard</h3>

                  <div className={styles.price}>
                    <span>&#x24;50</span>
                    <span>Per month</span>
                    <span>Including GST</span>
                  </div>

                  <ul>
                    <li>10 Categories</li>
                    <li>25 User Accounts</li>
                  </ul>
                </div>

                <div className={styles.plan}>
                  <h3>Premium</h3>

                  <div className={styles.price}>
                    <span>&#x24;100</span>
                    <span>Per month</span>
                    <span>Including GST</span>
                  </div>

                  <ul>
                    <li>50 Categories</li>
                    <li>125 User Accounts</li>
                  </ul>
                </div>

                <div className={styles.plan}>
                  <h3>Enterprise</h3>

                  <div className={styles.price}>
                    <span>Call Us</span>
                    <span>For a quote</span>
                    <span>+61 481 465 983</span>
                  </div>

                  <ul>
                    <li>Unlimited Categories</li>
                    <li>Unlimited User Accounts</li>
                    <li>Staging/Preview Site</li>
                  </ul>
                </div>

                <h3>Additional Charges</h3>

                <ul>
                  <li>Storage: AU&#x24;1.00 per GB<br /><span>Per month, incl. GST</span></li>
                  <li>Transfer (outbound): AU&#x24;1.00 per GB<br /><span>Per month, incl. GST</span></li>
                </ul>
              </div>
            </div>
          </TextBlock>
        </section>

        <section className={styles.section}>
          <TextBlock>
            <h2 style={{textAlign: 'center'}}>
              Want to know more?
            </h2>
          </TextBlock>
        </section>

        <section className={`${styles.section} ${styles.featuresSection}`}>
          <TextBlock>
            <p style={{display: 'none'}}>
              Get in touch with our sales team, using the following form.
            </p>

            <div className={styles.twoCol}>
              <div className={styles.col}>
                <p>
                  Call us: <br />
                  <Link href="tel:+61482465983">+61 482 465 983</Link>
                </p>
              </div>
              <div className={styles.col}>
                <p>
                  Email us: <br />
                  <Link href="mailto:sales@eviratec.com">sales@eviratec.com</Link>
                </p>
              </div>
            </div>
          </TextBlock>
        </section>

        <section className={styles.section}>
          <TextBlock>
            <h2 style={{textAlign: 'center'}}>
              Social Profiles
            </h2>
          </TextBlock>
        </section>

        <div className={styles.section} id="profiles">
          <SocialProfiles />
        </div>

        <section className={styles.section}>
          <TextBlock>
            <h2 style={{textAlign: 'center'}}>
              Legal
            </h2>
          </TextBlock>
        </section>

        <div className={`${styles.section} ${styles.contact}`} id="legal">
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
