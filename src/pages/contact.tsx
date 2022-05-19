import { useState } from 'react'
import type { NextPage } from 'next'
import {
  AiOutlineLoading3Quarters,
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
} from 'react-icons/ai'
import Meta from '../components/molecules/meta'
import Layout from '../components/template/layout'
import TitleLogo from '../components/atoms/title_logo'

const Cotact: NextPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<number>(0)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setStatus(1)
    e.preventDefault()

    const res = await fetch('/api/sendMail', {
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    setStatus(res.status)
  }

  return (
    <>
      <Meta subTitle="お問い合わせ" />
      <TitleLogo />
      <Layout>
        <section className="prose-custom mt-16">
          <h1>お問い合わせ</h1>
          <form
            className="ml-3 mt-10 grid grid-cols-1 gap-6"
            onSubmit={handleSubmit}
          >
            <label className="block">
              <span>お名前</span>
              <input
                type="text"
                className="mt-1 w-full rounded border-teal-200 focus:border-indigo-300 focus:ring-indigo-200"
                placeholder=""
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </label>
            <label className="block">
              <span>メールアドレス</span>
              <input
                type="email"
                className="mt-1 w-full rounded border-teal-200 focus:border-indigo-300 focus:ring-indigo-200"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </label>
            <label className="block">
              <span>お問い合わせ内容</span>
              <textarea
                className="mt-1 w-full rounded border-teal-200 focus:border-indigo-300 focus:ring-indigo-200"
                rows={4}
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
              ></textarea>
            </label>
            <button
              className={`w-[fit-content] rounded bg-teal-100 px-10 py-1 shadow shadow-gray-400/40 duration-300 hover:bg-black/10 ${
                status && 'pointer-events-none'
              }`}
            >
              送信
            </button>
          </form>
          <div className="ml-3 pt-3">
            {status === 0 ? (
              <></>
            ) : status === 1 ? (
              <p className="inline-flex items-center">
                <AiOutlineLoading3Quarters className="mr-2 animate-spin text-2xl" />
                送信中
              </p>
            ) : status === 200 ? (
              <p className="inline-flex items-center font-semibold">
                <AiOutlineCheckCircle className="mr-2 text-2xl text-blue-600" />
                送信に成功しました
              </p>
            ) : (
              <p className="inline-flex items-center font-semibold">
                <AiOutlineExclamationCircle className="mr-2 text-2xl text-red-600" />
                送信に失敗しました
              </p>
            )}
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Cotact
