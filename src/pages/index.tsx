import type { NextPage } from 'next'
import Link from 'next/link'
import SVG from '../components/atoms/svg'

const Index: NextPage = () => {
  return (
    <>
      <div className="relative h-[50vh] bg-[#fafafa]">
        <div className="absolute top-[50%] left-[50%] z-10 translate-y-[-50%] translate-x-[-50%]">
          <p className="mx-auto mb-1 w-[fit-content] text-xl font-light text-[#222277]">
            釣り場探索マップ
          </p>
          <h1 className="mx-auto mb-20 w-[fit-content] text-5xl text-[#444488]">
            Langling
          </h1>
          <Link href={`/angling_map`}>
            <a className="mx-auto block w-[fit-content] rounded-lg bg-[#ADFFEA] px-5 py-2">
              地図を開く
            </a>
          </Link>
        </div>
        <div className="absolute top-[50%] left-[5%] h-20 w-20">
          <SVG
            src="/images/seagull1.svg"
            className="top-[65%] left-[10%] h-[40px] w-[80px]"
          />
          <SVG
            src="/images/seagull2.svg"
            className="top-[20%] left-[4%] h-[25px] w-[50px]"
          />
          <SVG
            src="/images/seagull3.svg"
            className="top-[10%] left-[40%] h-[25px] w-[50px]"
          />
        </div>
      </div>
      <div className="relative h-[50vh] bg-[#f3f3ff]">
        <div className="absolute top-[50%] left-[50%] z-10 w-max translate-y-[-50%] translate-x-[-50%]">
          <h2 className="mb-5 text-2xl">このWebサイトについて</h2>
          <p className="mb-4 text-center">
            サンプルテキストサンプルテキスト
            <br />
            サンプルテキストサンプルテキスト
          </p>
          <p className="text-center">
            サンプルテキストサンプルテキスト
            <br />
            サンプルテキストサンプルテキスト
            <br />
            サンプルテキストサンプルテキスト
          </p>
        </div>
        <div className="absolute top-[5%] left-[5%] h-20 w-20">
          <SVG
            src="/images/fish8.svg"
            className="top-[0%] left-[0%] h-[15px] w-[30px]"
          />
          <SVG
            src="/images/fish8.svg"
            className="top-[15%] left-[-40%] h-[23px] w-[46px]"
          />
          <SVG
            src="/images/fish8.svg"
            className="top-[20%] left-[50%] h-[20px] w-[40px]"
          />
          <SVG
            src="/images/fish8.svg"
            className="top-[50%] left-[30%] h-[20px] w-[40px]"
          />
        </div>
      </div>
    </>
  )
}

export default Index
