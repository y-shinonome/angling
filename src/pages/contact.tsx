import type { NextPage } from 'next'
import Meta from '../components/molecules/meta'
import Layout from '../components/template/layout'
import TitleLogo from '../components/atoms/title_logo'

const Cotact: NextPage = () => {
  return (
    <>
      <Meta subTitle="お問い合わせ" />
      <TitleLogo />
      <Layout>
        <section className="prose-custom mt-16">
          <h1>お問い合わせ</h1>
          <p>準備中！</p>
        </section>
      </Layout>
    </>
  )
}

export default Cotact
