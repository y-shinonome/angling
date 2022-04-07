import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
