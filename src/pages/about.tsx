import type { NextPage } from 'next'
import Meta from '../components/molecules/meta'
import Layout from '../components/template/layout'
import TitleLogo from '../components/atoms/title_logo'

const About: NextPage = () => {
  return (
    <>
      <Meta subTitle="このサイトについて" />
      <TitleLogo />
      <Layout>
        <section className="prose-custom mt-16">
          <h1>このサイトについて</h1>
          <p>準備中！</p>
        </section>
      </Layout>
    </>
  )
}

export default About
