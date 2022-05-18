import type { NextPage } from 'next'
import Meta from '../components/molecules/meta'
import Layout from '../components/template/layout'
import TitleLogo from '../components/atoms/title_logo'

const Terms: NextPage = () => {
  return (
    <>
      <Meta subTitle="利用規約" />
      <TitleLogo />
      <Layout>
        <section className="prose-custom mt-16">
          <h1>利用規約</h1>
          <p>準備中！</p>
        </section>
      </Layout>
    </>
  )
}

export default Terms
