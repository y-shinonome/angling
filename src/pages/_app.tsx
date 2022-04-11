import type { AppProps } from 'next/app'
// import GoogleMaps from '../components/google_maps'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <GoogleMaps /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
