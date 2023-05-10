import { useCallback, useContext, useEffect, useState } from 'react'
import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/VerifyIdentity.module.css'

import fetchSessionByToken from '@/functions/fetchSessionByToken'
import fetchUserProfileById from '@/functions/fetchUserProfileById'

import Footer from '@/components/Footer'
import Button from '@/components/Button'
import FeedPageHeading from '@/components/FeedPageHeading'

import SessionContext from '@/contexts/SessionContext'

import type { UserProfile } from '@/types/User'
import type { Session } from '@/types/Session'

interface Props {
  profile: UserProfile
  token: string
  _session: Session
}

const VERIFIED_STATUSES: string[] = [
  'VERIFIED',
  'ID_VERIFIED',
]

const VerifyIdentityPage: NextPage<Props> = ({ profile, token, _session }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const session = useContext(SessionContext)

  return (
    <>
      <Head>
        <title>Personal Identity Verification - Eviratec</title>
        <meta name="description" content="Verify your personal identity on Eviratec" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="rgba(33,33,33,1)" />
        <meta property="og:title" content="Eviratec Personal Identity Verification" />
        <meta property="og:description" content="Verify your personal identity on Eviratec" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eviratec.com.au/verify/identity" />
        <meta property="og:image" content="https://www.eviratec.com.au/og.png" />
      </Head>

      <main className={styles.main}>
        <FeedPageHeading>
          Identity Verification
        </FeedPageHeading>

        {'ID_VERIFIED' === profile.status &&
          <>
            <p>You have already verified your identity.</p>
            <p><Button href={'/me'}>&#10554; Return to my profile</Button></p>
          </>
        ||
          <>
            <p>Identity verification is coming soon...</p>
            <p><Button href={'/me'}>&#10554; Return to my profile</Button></p>
          </>
        }
      </main>

      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const token: string = context.req.cookies && context.req.cookies['eviratecseshid'] || ''
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const _session: Session = await fetchSessionByToken(token)
  if (!_session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const profile: UserProfile = await fetchUserProfileById(_session.user)
  if (!profile) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      profile,
      token,
      _session
    },
  }
}

export default VerifyIdentityPage
