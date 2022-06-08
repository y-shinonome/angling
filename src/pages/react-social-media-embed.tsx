import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Meta from '../components/molecules/meta'
import Layout from '../components/template/layout'
import TitleLogo from '../components/atoms/title_logo'
import { TwitterEmbed, InstagramEmbed } from 'react-social-media-embed'

const ReactSocialMediaEmbed: NextPage = () => {
  const CustomFacebookEmbed = dynamic(
    () =>
      import('../components/react_social_media_embed/custom_facebook_embed'),
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
        <CustomFacebookEmbed url="https://www.facebook.com/fishingvision/photos/a.192837284176016/4939460569513640" />
        <div className="flex justify-center">
          <TwitterEmbed url="https://twitter.com/irohass_Fishing/status/1534266060592910336" />
        </div>
        <div className="flex justify-center">
          <InstagramEmbed url="https://www.instagram.com/p/CegV2v0PpV4/" />
        </div>
      </Layout>
    </>
  )
}

export default ReactSocialMediaEmbed
