import type { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Leaflet from '../../components/template/leaflet'
import type { Entry } from 'contentful'
import Meta from '../../components/molecules/meta'
import type { IAnglingFieldsFields } from '../../../@types/contentful'
import { getAnglingFields } from '../../utils/contentful'
import Layout from '../../components/template/layout'
import PositionPopup from '../../components/angling_map/position_popup'
import { generateAnglingFieldsPlaceHolder } from '../../utils/plaiceholder'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (pageProps: Props, page: ReactElement) => ReactElement
}

type Props = {
  anglingFields: Entry<IAnglingFieldsFields>[]
}

const AnglingMap: NextPageWithLayout<Props> = ({ anglingFields }) => {
  return (
    <>
      <Meta subTitle="釣り場一覧" />
      <h2 className="my-8 mx-3 border-b-2 border-teal-400 text-lg font-bold text-[#2a2a2a]">
        釣り場一覧
      </h2>
      <ul>
        {anglingFields.map((anglingField, index) => (
          <div key={index}>
            <li id={anglingField.sys.id}>
              <div className="flex items-stretch justify-between px-3 duration-300 hover:bg-teal-200/30">
                <Link href={`/angling_map/${anglingField.sys.id}`}>
                  <a className="block flex-grow py-2">
                    <h3 className="block text-sm font-bold">
                      {anglingField.fields.name}
                    </h3>
                    <p className="mr-5 mt-3 text-xs text-gray-500 line-clamp-3">
                      {anglingField.fields.description}
                    </p>
                  </a>
                </Link>
                <div className="flex flex-col py-2">
                  <Link href={`/angling_map/${anglingField.sys.id}`}>
                    <a className="block flex-grow">
                      <div className="relative aspect-[1.91/1] w-[33vw] max-w-[200px] ">
                        <Image
                          src={anglingField.fields.thumbnailUrl}
                          alt={anglingField.fields.name}
                          layout="fill"
                          objectFit="contain"
                          placeholder="blur"
                          blurDataURL={anglingField.fields.blurImage}
                          className="duration-500"
                        />
                      </div>
                    </a>
                  </Link>
                  <PositionPopup
                    title={anglingField.fields.name}
                    lat={anglingField.fields.position.lat}
                    lon={anglingField.fields.position.lon}
                    id={anglingField.sys.id}
                    className="mt-2 w-full py-1 text-xs"
                  />
                </div>
              </div>
            </li>
            <hr className="my-5" />
          </div>
        ))}
      </ul>
    </>
  )
}

AnglingMap.getLayout = (props, page) => {
  return (
    <>
      <Leaflet zoom={9} anglingFields={props.anglingFields} />
      <Layout>{page}</Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const anglingFieldsSrc = await getAnglingFields()
  const anglingFields = await generateAnglingFieldsPlaceHolder(anglingFieldsSrc)

  return {
    props: {
      anglingFields: anglingFields,
    },
  }
}

export default AnglingMap
