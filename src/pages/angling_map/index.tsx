import type { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Leaflet from '../../components/template/leaflet'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'
import { getAnglingFields } from '../../utils/contentful'
import Layout from '../../components/template/layout'
import PositionPopup from '../../components/angling_map/position_popup'

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
      <h2 className="mt-8 border-b-2 text-lg font-semibold text-[#505050]">
        釣り場一覧
      </h2>
      <ul>
        {anglingFields.map((anglingField, index) => (
          <li key={index} className="mt-8">
            <div className="flex items-start border">
              <div className="flex flex-shrink-0 flex-col">
                <Link href={`/angling_map/${anglingField.sys.id}`}>
                  <a>
                    <div className="relative aspect-[1.91/1] w-[45vw] max-w-[300px]">
                      <Image
                        src={anglingField.fields.thumbnailUrl}
                        alt={anglingField.fields.name}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </a>
                </Link>
                <PositionPopup
                  title={anglingField.fields.name}
                  lat={anglingField.fields.position.lat}
                  lon={anglingField.fields.position.lon}
                  className="mt-2 w-full py-1 px-2 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <h3>
                  <Link href={`/angling_map/${anglingField.sys.id}`}>
                    <a className="my-1 block p-2 text-sm">
                      {anglingField.fields.name}
                    </a>
                  </Link>
                </h3>
                <ul className="ml-2 flex flex-wrap gap-1 pr-2 text-xs">
                  {anglingField.fields.categories.map((category, index) => (
                    <li
                      key={index}
                      className="border border-[#9cc0b7] py-[2px] px-1"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
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
