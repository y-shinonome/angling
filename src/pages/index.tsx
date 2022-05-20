import type { ReactElement } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { BsLayersHalf } from 'react-icons/bs'
import { BiCurrentLocation } from 'react-icons/bi'
import type { Entry } from 'contentful'
import type {
  IAnglingFieldsFields,
  ITopPageFields,
  IUpdatedFields,
} from '../../@types/contentful'
import ReactMarkdown from 'react-markdown'
import dayjs from 'dayjs'
import {
  getAnglingFields,
  getTopPageContent,
  getUpdated,
} from '../utils/contentful'
import Meta from '../components/molecules/meta'
import Layout from '../components/template/layout'
import SVG from '../components/atoms/svg'
import Leaflet from '../components/template/leaflet'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (pageProps: Props, page: ReactElement) => ReactElement
}

type Props = {
  anglingFields: Entry<IAnglingFieldsFields>[]
  topPageContent: Entry<ITopPageFields>[]
  updated: Entry<IUpdatedFields>[]
}

const TopPage: NextPageWithLayout<Props> = ({ topPageContent, updated }) => {
  return (
    <>
      <Meta subTitle="釣り場探索マップ" type="website" />
      <div className="mb-10 flex flex-col items-center py-20">
        <p className="text-sm">釣り場探索マップ</p>
        <h1 className="mb-10 font-logo text-4xl font-light text-teal-500">
          Langling
        </h1>
        <Link href={`/angling_map`}>
          <a className="flex w-[fit-content] items-center justify-center rounded bg-teal-100 px-8 py-2 text-lg shadow-md shadow-gray-400/40 duration-300 hover:bg-black/10">
            <SVG src="/icons/map.svg" className="mr-2 h-[22px] w-[22px]" />
            釣り場を探す
          </a>
        </Link>
      </div>
      <div className="prose-custom">
        <ReactMarkdown>{topPageContent[0].fields.content}</ReactMarkdown>
      </div>
      <div className="mt-10 mb-16 grid grid-cols-2 gap-x-3 gap-y-5 text-sm">
        <div className="flex flex-col items-center gap-y-2 rounded bg-white py-3 px-5 shadow-md">
          <SVG src="/icons/angling_field.svg" className="h-[40px] w-[28px]" />
          <p>地図上のピンを選択するとその地点の情報を確認することができます</p>
        </div>
        <div className="flex flex-col items-center gap-y-2 rounded bg-white py-3 px-5 shadow-md">
          <BsLayersHalf className="text-4xl" />
          通常画像の地図と衛星画像の地図を切り替えることができます
        </div>
        <div className="flex flex-col items-center gap-y-2 rounded bg-white py-3 px-5 shadow-md">
          <BiCurrentLocation className="text-4xl" />
          現在の位置情報を地図上に表示します
        </div>
        <div className="flex flex-col items-center gap-y-2 rounded bg-white py-3 px-5 shadow-md">
          <p className="text-4xl">+－</p>
          地図の縮尺を変更します
        </div>
        <div className="flex flex-col items-center gap-y-2 rounded bg-white py-3 px-5 shadow-md">
          <div className="my-5 h-1 w-16 rounded-sm bg-gray-400/50" />
          地図画面の境界にあるバーをドラッグすると、表示範囲を変更できます
        </div>
      </div>
      <div className="prose-custom">
        <h2>更新情報</h2>
      </div>
      <ul className="mt-4 text-sm">
        {updated.map((item, index) => (
          <li className="mb-2 flex" key={index}>
            <time dateTime="2022-04-30" className="mr-4 flex-shrink-0">
              {dayjs(item.fields.updatedDate).format('YYYY年MM月DD日')}
            </time>
            <p>{item.fields.text}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

TopPage.getLayout = (props, page) => {
  return (
    <>
      <Leaflet anglingFields={props.anglingFields} zoom={10} />
      <Layout>{page}</Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const anglingFields = await getAnglingFields()
  const topPageContent = await getTopPageContent()
  const updated = await getUpdated()

  return {
    props: {
      anglingFields: anglingFields,
      topPageContent: topPageContent,
      updated: updated,
    },
  }
}

export default TopPage
