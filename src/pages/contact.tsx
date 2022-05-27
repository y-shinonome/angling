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
    e.preventDefault()
    setStatus(1)

    const res = await fetch('/api/send_mail', {
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
        <section className="prose-custom mx-3 mt-16">
          <h1>お問い合わせ</h1>
          <form className="mt-10 grid grid-cols-1" onSubmit={handleSubmit}>
            <label className="block">
              <span>お名前</span>
              <span className="ml-1 text-slate-400">(必須)</span>
              <input
                type="text"
                className="w-full rounded border-teal-200 focus:border-indigo-300 focus:ring-indigo-200"
                required={true}
                maxLength={256}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </label>
            <label className="mt-5 block">
              <span>メールアドレス</span>
              <span className="ml-1 text-slate-400">(必須)</span>
              <input
                type="email"
                className="w-full rounded border-teal-200 focus:border-indigo-300 focus:ring-indigo-200"
                required={true}
                maxLength={256}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </label>
            <label className="mt-5 block">
              <span>お問い合わせ内容</span>
              <span className="ml-1 text-slate-400">(必須)</span>
              <textarea
                className="mt-1 w-full rounded border-teal-200 placeholder:text-slate-400 focus:border-indigo-300 focus:ring-indigo-200"
                placeholder="5000文字以内"
                required={true}
                maxLength={5000}
                rows={4}
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
              ></textarea>
            </label>
            <button
              className={`mt-2 rounded bg-teal-100 px-10 py-1 shadow shadow-gray-400/40 duration-300 hover:bg-black/10 ${
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
