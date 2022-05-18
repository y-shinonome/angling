import Head from 'next/head'
import { useRouter } from 'next/router'

type props = {
  subTitle?: string
  description?: string
  imageUrl?: string
  type?: string
}

const Meta: React.FC<props> = ({
  subTitle,
  description = '釣り場の情報を地図にまとめたWebサイトです。釣りポイントの情報だけではなく、駐車場等の周辺施設の情報も細かく掲載しています。まだ行ったことのない釣り場を地図から探索してみませんか？',
  imageUrl = 'https://dl.dropboxusercontent.com/s/o2ukugqq4jr9id8/ogp_common.png',
  type = 'article',
}) => {
  const title = subTitle ? `${subTitle} | Langling` : 'Langling'

  const router = useRouter()
  const pageUrl = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}${router.asPath}`

  return (
    <Head>
      <meta content={description} name="description" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="ja_JP" />
    </Head>
  )
}

export default Meta
