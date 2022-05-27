import type { NextPage } from 'next'
import Meta from '../../components/molecules/meta'
import Layout from '../../components/template/layout'
import TitleLogo from '../../components/atoms/title_logo'

const Page404: NextPage = () => {
  return (
    <>
      <Meta subTitle="ブログ一覧" />
      <TitleLogo />
      <Layout>
        <section className="prose-custom mx-3 mt-16">
          <h1>ブログ一覧</h1>
          <h2>このサイトの開発記録や釣行記など</h2>
          <p>準備中！</p>
        </section>
      </Layout>
    </>
  )
}

export default Page404
