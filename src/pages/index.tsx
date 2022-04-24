import type { NextPage } from 'next'
import Link from 'next/link'

const Index: NextPage = () => {
  return (
    <>
      <p className="mb-1 pt-20 text-center text-xl">釣り場探索マップ</p>
      <h1 className="mb-20 text-center text-5xl">Langling</h1>
      <Link href={`/angling_map`}>
        <a className="mx-auto block w-[fit-content] rounded-lg bg-[#ADFFEA] px-5 py-2">
          地図を開く
        </a>
      </Link>
      <h2 className="mt-10 mb-5 text-center text-2xl">このWebサイトについて</h2>
      <p className="text-center">
        サンプルテキストサンプルテキスト
        <br />
        サンプルテキストサンプルテキスト
        <br />
        <br />
        サンプルテキストサンプルテキスト
        <br />
        サンプルテキストサンプルテキスト
        <br />
        サンプルテキストサンプルテキスト
      </p>
    </>
  )
}

export default Index
