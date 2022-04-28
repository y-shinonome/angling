import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html>
      <Head lang="ja-JP">
        <link
          href="https://fonts.googleapis.com/css2?family=Poiret+One&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-[#f9f9f9] text-[#2a2a2a]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
