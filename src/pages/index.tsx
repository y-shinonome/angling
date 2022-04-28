import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const Index: NextPage = () => {
  return (
    <>
      <p className="mb-1 mt-14 text-center text-lg">釣り場探索マップ</p>
      <h1 className="mb-10 text-center font-['Poiret_One'] text-6xl">
        Langling
      </h1>
      <div className="relative mx-auto h-[200px] w-[200px]">
        <Image src="/top.png" alt="top" layout="fill" objectFit="contain" />
      </div>
      <Link href={`/angling_map`}>
        <a className="mx-auto mt-10 block w-[fit-content] rounded-lg bg-[#ADFFEA] px-5 py-2">
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
