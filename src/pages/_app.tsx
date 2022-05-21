import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/tailwind.css'
import '../styles/fonts.css'
import PopupProvider from '../context/popup_context'
import Navigation from '../components/molecules/navigation'
import Footer from '../components/template/footer'

type NextPageWithLayout = NextPage & {
  getLayout?: (pageProps: AppProps, page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ pageProps, Component }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return (
      <>
        <Navigation />
        <PopupProvider>
          {Component.getLayout(pageProps, <Component {...pageProps} />)}
        </PopupProvider>
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}

export default MyApp
