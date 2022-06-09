import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import useSWR from 'swr'
import Meta from '../components/molecules/meta'
import Layout from '../components/template/layout'
import TitleLogo from '../components/atoms/title_logo'
import SocialMediaPostForm from '../components/react_social_media_embed/social_media_post_form'

type SocialMedia = {
  url: string
}[]

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const ReactSocialMediaEmbed: NextPage = () => {
  const { data } = useSWR<SocialMedia>(`/api/fetch_social_media`, fetcher, {
    revalidateOnFocus: false,
  })

  const FacebookEmbedCSR = dynamic(
    () => import('../components/react_social_media_embed/facebook_embed_csr'),
    {
      loading: () => null,
      ssr: false,
    }
  )

  const TwitterEmbedCSR = dynamic(
    () => import('../components/react_social_media_embed/twitter_embed_csr'),
    {
      loading: () => null,
      ssr: false,
    }
  )

  const InstagramEmbedCSR = dynamic(
    () => import('../components/react_social_media_embed/instagram_embed_csr'),
    {
      loading: () => null,
      ssr: false,
    }
  )

  return (
    <>
      <Meta subTitle="SNS埋め込みテスト" />
      <TitleLogo />
      <Layout>
        <SocialMediaPostForm />
        {data?.map((item, index) =>
          item.url.includes('twitter') ? (
            <div className="my-5 flex justify-center" key={index}>
              <TwitterEmbedCSR url={item.url} />
            </div>
          ) : item.url.includes('facebook') ? (
            <div className="my-5 flex justify-center" key={index}>
              <FacebookEmbedCSR url={item.url} />
            </div>
          ) : item.url.includes('instagram') ? (
            <div className="my-5 flex justify-center" key={index}>
              <InstagramEmbedCSR url={item.url} />
            </div>
          ) : null
        )}
      </Layout>
    </>
  )
}

export default ReactSocialMediaEmbed
