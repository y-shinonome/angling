import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang="ja-JP">
      <Head prefix="article: https://ogp.me/ns/article# website: https://ogp.me/ns/article#" />
      <body className="bg-[#f9f9f9] text-[#374151] selection:bg-teal-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
