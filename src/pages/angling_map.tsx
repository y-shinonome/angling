import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { getAnglingFields } from '../utils/contentful'

type Props = {
  anglingFields: AnglingField[]
}

const LeafletTest: NextPage<Props> = ({ anglingFields }) => {
  const Leaflet = dynamic(() => import('../components/leaflet'), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  })

  const center: Position = { lat: 35.5, lng: 139.8 }
  const zoom: number = 10

  return (
    <>
      <Leaflet center={center} zoom={zoom} anglingFields={anglingFields} />
      <Link href={`/`}>
        <a>top</a>
      </Link>
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

export default LeafletTest
