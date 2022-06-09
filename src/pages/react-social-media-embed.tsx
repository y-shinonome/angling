import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import useSWR from 'swr'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Meta from '../components/molecules/meta'
import Layout from '../components/template/layout'
import TitleLogo from '../components/atoms/title_logo'
import SocialMediaPostForm from '../components/react_social_media_embed/social_media_post_form'

type SocialMedia = {
  url: string
}[]

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Placeholder = () => {
  return (
    <div className="flex h-80 w-full items-center justify-center bg-teal-100">
      <AiOutlineLoading3Quarters className="animate-spin text-6xl text-gray-500" />
    </div>
  )
}

const ReactSocialMediaEmbed: NextPage = () => {
  const { data } = useSWR<SocialMedia>(`/api/fetch_social_media`, fetcher, {
    revalidateOnFocus: false,
  })

  const FacebookEmbedCSR = dynamic(
    () => import('../components/react_social_media_embed/facebook_embed_csr'),
    {
      loading: () => <Placeholder />,
      ssr: false,
    }
  )

  const TwitterEmbedCSR = dynamic(
    () => import('../components/react_social_media_embed/twitter_embed_csr'),
    {
      loading: () => <Placeholder />,
      ssr: false,
    }
  )

  const InstagramEmbedCSR = dynamic(
    () => import('../components/react_social_media_embed/instagram_embed_csr'),
    {
      loading: () => <Placeholder />,
      ssr: false,
    }
  )

  return (
    <>
      <Meta subTitle="SNS埋め込みテスト" />
      <TitleLogo />
      <Layout>
        <SocialMediaPostForm />
        <div className="mx-3">
          {data?.map((item, index) => (
            <div
              className="my-6 mx-auto flex w-full max-w-[548px] justify-center"
              key={index}
            >
              {item.url.includes('twitter') ? (
                <TwitterEmbedCSR url={item.url} />
              ) : item.url.includes('facebook') ? (
                <FacebookEmbedCSR url={item.url} />
              ) : item.url.includes('instagram') ? (
                <InstagramEmbedCSR url={item.url} />
              ) : null}
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export default ReactSocialMediaEmbed
