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
          <form className="ml-3 mt-10 grid grid-cols-1 gap-6">
            <label className="block">
              <span>お名前</span>
              <input
                type="text"
                className="mt-1 w-full rounded border-teal-200 focus:border-indigo-300 focus:ring-indigo-200"
                placeholder=""
              />
            </label>
            <label className="block">
              <span>メールアドレス</span>
              <input
                type="email"
                className="mt-1 w-full rounded border-teal-200 focus:border-indigo-300 focus:ring-indigo-200"
              />
            </label>
            <label className="block">
              <span>お問い合わせ内容</span>
              <textarea
                className="mt-1 w-full rounded border-teal-200 focus:border-indigo-300 focus:ring-indigo-200"
                rows={4}
              ></textarea>
            </label>
          </form>
          <button className="ml-3 mt-3 rounded bg-teal-100 py-1 px-10 shadow shadow-gray-400/40 duration-300 hover:bg-black/10">
            送信
          </button>
        </section>
      </Layout>
    </>
  )
}

export default Cotact
