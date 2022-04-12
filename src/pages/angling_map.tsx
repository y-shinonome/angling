import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { client } from '../utils/micro_cms'

type Props = {
  anglingSpots: {
    lat: number
    lng: number
  }[]
}

const LeafletTest: NextPage<Props> = ({ anglingSpots }) => {
  const Leaflet = dynamic(() => import('../components/leaflet'), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  })

  return (
    <>
      <Leaflet position={[anglingSpots[0].lat, anglingSpots[0].lng]} />
      <Link href={`/`}>
        <a>top</a>
      </Link>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const anglingSpots = await client.get({
    endpoint: 'angling_spots',
  })

  return {
    props: {
      anglingSpots: anglingSpots.contents,
    },
  }
}

export default LeafletTest
