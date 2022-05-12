import type { ReactElement } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../@types/contentful'
import { getAnglingFields } from '../utils/contentful'
import Layout from '../components/template/layout'
import SVG from '../components/atoms/svg'
import Leaflet from '../components/template/leaflet'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (pageProps: Props, page: ReactElement) => ReactElement
}

type Props = {
  anglingFields: Entry<IAnglingFieldsFields>[]
}

const TopPage: NextPageWithLayout = () => {
  return (
    <>
      <div className="mb-10 flex flex-col items-center py-20">
        <p className="text-sm">釣り場探索マップ</p>
        <h1 className="font-logo mb-10 text-4xl font-light text-[#83beaf]">
          Langling
        </h1>
        <Link href={`/angling_map`}>
          <a className="flex w-[fit-content] items-center justify-center rounded bg-teal-100 px-8 py-2 text-lg shadow-md shadow-gray-400/40 duration-300 hover:bg-black/10">
            <SVG src="/icons/map.svg" className="mr-2 h-[22px] w-[22px]" />
            釣り場を探す
          </a>
        </Link>
      </div>

      <h2 className="mb-2 border-b-[4px] border-[#c5fff0] text-xl text-[#333333]">
        このサイトについて
      </h2>
      <p className="text-sm">
        釣り場の情報を地図にまとめたWebサイトです。
        <br />
        釣りポイントの情報だけではなく
        <br />
        駐車場やトイレ等の場所も探すことができます。
        <br />
        <br />
        まだ行ったことのない釣り場を
        <br />
        地図から探索してみませんか？
      </p>
      <h2 className="mt-16 mb-2 border-b-4 border-[#c5fff0] text-xl text-[#333333]">
        更新情報
      </h2>
      <ul className="text-sm">
        <li className="mb-2 flex">
          <time dateTime="2022-04-30" className="mr-4 flex-shrink-0">
            2022年4月30日
          </time>
          <p>末広水際線プロムナード（ふれーゆ裏） 釣り場マップ公開</p>
        </li>
        <li className="mb-2 flex">
          <time
            dateTime="2022-04-30"
            className="mr-4 flex-shrink-0 flex-grow-0"
          >
            2022年4月30日
          </time>
          <p className="flex-grow-0">東扇島西公園 釣り場マップ公開</p>
        </li>
        <li className="mb-2 flex">
          <time dateTime="2022-04-30" className="mr-4 flex-shrink-0">
            2022年4月29日
          </time>
          <p>Webサイト公開</p>
        </li>
      </ul>
    </>
  )
}

TopPage.getLayout = (props, page) => {
  return (
    <>
      <Leaflet anglingFields={props.anglingFields} zoom={10} />
      <Layout>
        <TopPage>{page}</TopPage>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const anglingFields = await getAnglingFields()

  return {
    props: {
      anglingFields: anglingFields,
    },
  }
}

export default TopPage
