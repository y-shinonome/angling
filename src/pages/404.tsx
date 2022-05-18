import type { NextPage } from 'next'
import { IoWarningOutline } from 'react-icons/io5'
import Meta from '../components/molecules/meta'
import Layout from '../components/template/layout'
import TitleLogo from '../components/atoms/title_logo'

const Page404: NextPage = () => {
  return (
    <>
      <Meta subTitle="ページが見つかりませんでした" />
      <TitleLogo />
      <Layout>
        <section className="prose prose-sm mt-16 prose-headings:text-[#2a2a2a]">
          <h1>Page not found.</h1>
          <h2 className="inline-flex items-center">
            <IoWarningOutline className="mr-2 text-2xl" />
            404 Error
          </h2>
          <p>
            ページが見つかりませんでした。
            <br />
            一時的にアクセスできない状況にあるか、
            <br />
            移動もしくは、削除された可能性があります。
          </p>
        </section>
      </Layout>
    </>
  )
}

export default Page404
