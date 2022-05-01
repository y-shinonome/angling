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
        <a className="mx-auto mb-14 flex w-[fit-content] items-center rounded-lg bg-[#ADFFEA] px-5 py-2 shadow-md shadow-gray-400/50 duration-300 hover:bg-black/10">
          <SVG src="/icons/map.svg" className="mr-2 h-[25px] w-[25px]" />
          地図を開く
        </a>
      </Link>
      <h2></h2>
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
      <h2 className="mt-20 mb-2 text-center text-lg">更新情報</h2>
      <ul className="mx-auto w-[fit-content] p-3 text-sm">
        <li className="flex">
          <time dateTime="2022-04-30" className="mr-4 flex-shrink-0">
            2022年4月30日
          </time>
          <p>末広水際線プロムナード（ふれーゆ裏） 釣り場マップ公開</p>
        </li>
        <li className="flex">
          <time
            dateTime="2022-04-30"
            className="mr-4 flex-shrink-0 flex-grow-0"
          >
            2022年4月30日
          </time>
          <p className="flex-grow-0">東扇島西公園 釣り場マップ公開</p>
        </li>
        <li className="flex">
          <time dateTime="2022-04-30" className="mr-4 flex-shrink-0">
            2022年4月29日
          </time>
          <p>Webサイト公開</p>
        </li>
      </ul>
      <footer className="mt-20 flex w-full flex-wrap justify-center border-t-[1px] border-[#2a2a2a]/30">
        <article className="mr-[10vw] mb-6 mt-3">
          <h2 className="mb-3 font-medium">Copyright</h2>
          <p className="text-sm">
            &copy; 2022 shinonome
            <br />
            All Rights Reserved.
            <br />
            Released under the{' '}
            <Link href="https://github.com/y-shinonome/langling/blob/main/LICENSE">
              MIT license
            </Link>
          </p>
        </article>
      </footer>
    </>
  )
}

export default Index
