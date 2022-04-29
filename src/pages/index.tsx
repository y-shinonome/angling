import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SVG from '../components/atoms/svg'

const Index: NextPage = () => {
  return (
    <>
      <p className="mt-14 text-center text-lg">釣り場探索マップ</p>
      <h1 className="mb-10 text-center font-logo text-5xl">Langling</h1>
      <div className="relative mx-auto mb-5 h-[180px] w-[180px]">
        <Image
          src="/top.png"
          alt="top"
          layout="fill"
          objectFit="contain"
          placeholder="blur"
          blurDataURL="/top.png"
        />
      </div>
      <Link href={`/angling_map`}>
        <a className="mx-auto mb-14 flex w-[fit-content] items-center rounded-lg bg-[#ADFFEA] px-5 py-2 shadow-md shadow-gray-400/50">
          <SVG src="/icons/map.svg" className="mr-2 h-[25px] w-[25px]" />
          地図を開く
        </a>
      </Link>
      <p className="text-center text-sm">
        釣り場の情報を地図にまとめました
        <br />
        釣りポイントの情報だけではなく
        <br />
        駐車場やトイレ等の場所も探すことができます
        <br />
        <br />
        まだ行ったことのない釣り場を
        <br />
        地図から探索してみませんか？
      </p>
    </>
  )
}

export default Index
