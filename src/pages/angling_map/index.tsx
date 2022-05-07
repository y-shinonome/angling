import type { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Leaflet from '../../components/template/leaflet'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'
import { getAnglingFields } from '../../utils/contentful'
import Layout from '../../components/layout'
import PositionPopup from '../../components/angling_map/position_popup'
import SVG from '../../components/atoms/svg'
type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (pageProps: Props, page: ReactElement) => ReactElement
}

type Props = {
  anglingFields: Entry<IAnglingFieldsFields>[]
}

const zoom: number = 10

const AnglingMap: NextPageWithLayout<Props> = ({ anglingFields }) => {
  return (
    <>
      <ul>
        {anglingFields.map((anglingField, index) => (
          <li key={index} className="mb-12 mt-8">
            <h2 className="mb-1 border-b-2 border-[#b0e2d5]">
              <Link href={`/angling_map/${anglingField.sys.id}`}>
                <a className="text-lg">{anglingField.fields.name}</a>
              </Link>
            </h2>
            <div className="mb-2 flex items-start">
              <div className="relative aspect-[1.91/1] w-[50%] flex-shrink-0">
                <Image
                  src={anglingField.fields.thumbnailUrl}
                  alt={anglingField.fields.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="ml-2">
                <PositionPopup
                  title={anglingField.fields.name}
                  lat={anglingField.fields.position.lat}
                  lon={anglingField.fields.position.lon}
                  className="mb-3 w-full text-sm"
                />
                <ul className="flex flex-wrap gap-1 text-xs">
                  {anglingField.fields.categories.map((category, index) => (
                    <li
                      key={index}
                      className="border border-[#9cc0b7] py-[2px] px-1"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex justify-end">
                  <Link href={`/angling_map/${anglingField.sys.id}`}>
                    <a>
                      <div className="flex w-[fit-content] items-center border-b border-[#b0e2d5] text-sm">
                        <SVG
                          src="/icons/arrow_right.svg"
                          className="mr-2 h-[12px] w-[7px]"
                        />
                        釣り場の詳細を見る
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

AnglingMap.getLayout = (props, page) => {
  return (
    <>
      <Leaflet zoom={zoom} anglingFields={props.anglingFields} />
      <Layout>{page}</Layout>
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

export default AnglingMap
