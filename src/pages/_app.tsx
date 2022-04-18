import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/tailwind.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (pageProps: AppProps, page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ pageProps, Component }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(pageProps, <Component {...pageProps} />)
  } else {
    return <Component {...pageProps} />
  }
}

export default MyApp
