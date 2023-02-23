import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`

      `}</style>
      <Component {...pageProps} />
    </>
  )
}
