import type { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Link from 'next/link'
import Leaflet from '../components/leaflet'
import { getAnglingFields } from '../utils/contentful'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (pageProps: Props, page: ReactElement) => ReactElement
}

type Props = {
  anglingFields: AnglingField[]
}
const center: Position = { lat: 35.5, lng: 139.8 }
const zoom: number = 10

const AnglingMap: NextPageWithLayout<Props> = ({ anglingFields }) => {
  return (
    <>
      <ul>
        {anglingFields.map((anglingField, index) => (
          <li key={index}>
            <Link href={`/angling_map/${anglingField.id}`}>
              <a>{anglingField.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={`/`}>
        <a>top</a>
      </Link>
    </>
  )
}

AnglingMap.getLayout = (props, page) => {
  return (
    <>
      <Leaflet
        center={center}
        zoom={zoom}
        anglingFields={props.anglingFields}
        className="sticky top-0 mb-3"
      />
      {page}
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const anglingFields = (await getAnglingFields()).map((item: any) => {
    return {
      id: item.sys.id,
      name: item.fields.name,
      position: {
        lat: item.fields.position.lat,
        lng: item.fields.position.lon,
      },
    }
  })

  return {
    props: {
      anglingFields: anglingFields,
    },
  }
}

export default AnglingMap
