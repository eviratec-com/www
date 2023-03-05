import '@/styles/globals.css'

import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`

      `}</style>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
