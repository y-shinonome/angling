import type { ReactElement } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import type { Entry } from 'contentful'
import type {
  IAnglingFieldsFields,
  IDocumentsFields,
  IUpdatedFields,
} from '../../@types/contentful'
import ReactMarkdown from 'react-markdown'
import dayjs from 'dayjs'
import {
  getAnglingFieldMarkers,
  getDocments,
  getUpdated,
} from '../utils/contentful'
import Meta from '../components/molecules/meta'
import Usage from '../components/molecules/usage'
import Layout from '../components/template/layout'
import SVG from '../components/atoms/svg'
import Leaflet from '../components/template/leaflet'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (pageProps: Props, page: ReactElement) => ReactElement
}

type Props = {
  anglingFieldMarkers: Entry<IAnglingFieldsFields>[]
  topPageContent: Entry<IDocumentsFields>
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
          <a className="flex w-[fit-content] items-center justify-center rounded bg-teal-100 px-8 py-2 text-lg shadow-md shadow-gray-400/40 duration-300 hover:bg-teal-400/30">
            <SVG src="/icons/map.svg" className="mr-2 h-[22px] w-[22px]" />
            釣り場を探す
          </a>
        </Link>
      </div>
      <div className="prose-custom mx-3">
        <ReactMarkdown>{topPageContent.fields.content}</ReactMarkdown>
      </div>
      <Usage className="mx-3 mt-10 mb-16" />
      <div className="prose-custom mx-3">
        <h2>更新情報</h2>
      </div>
      <ul className="mx-3 mt-4 text-sm">
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
      <Leaflet anglingFields={props.anglingFieldMarkers} zoom={9} />
      <Layout>{page}</Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const anglingFieldMarkers = await getAnglingFieldMarkers()
  const topPageContent = await getDocments('topPage')
  const updated = await getUpdated()

  return {
    props: {
      anglingFieldMarkers: anglingFieldMarkers,
      topPageContent: topPageContent[0],
      updated: updated,
    },
  }
}

export default TopPage
