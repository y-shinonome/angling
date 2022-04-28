import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/tailwind.css'
import '../styles/fonts.css'
import MarkerProvider from '../context/popup_context'

type NextPageWithLayout = NextPage & {
  getLayout?: (pageProps: AppProps, page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ pageProps, Component }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return (
      <MarkerProvider>
        {Component.getLayout(pageProps, <Component {...pageProps} />)}
      </MarkerProvider>
    )
  } else {
    return <Component {...pageProps} />
  }
}

export default MyApp
