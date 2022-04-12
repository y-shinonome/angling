import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { getAnglingSpots } from '../utils/firestore'

type Props = {
  anglingSpots: {
    name: string
    position: L.LatLngExpression
  }[]
}

const LeafletTest: NextPage<Props> = ({ anglingSpots }) => {
  const Leaflet = dynamic(() => import('../components/leaflet'), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  })
  const center: L.LatLngExpression = [35.5, 139.8]
  const zoom = 10

  return (
    <>
      <Leaflet center={center} zoom={zoom} anglingSpots={anglingSpots} />
      <Link href={`/`}>
        <a>top</a>
      </Link>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const anglingSpots = (await getAnglingSpots()).map((spot) => {
    return {
      name: spot.name,
      position: {
        lat: spot.position._latitude,
        lng: spot.position._longitude,
      },
    }
  })

  return {
    props: {
      anglingSpots: anglingSpots,
    },
  }
}

export default LeafletTest
