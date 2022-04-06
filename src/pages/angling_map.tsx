import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { client } from '../utils/micro_cms'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import GoogleMaps from '../components/google_maps'
import Marker from '../components/marker'

type Props = {
  anglingSpots: {
    name: string
    lat: number
    lng: number
  }[]
}

const AnglingMap: NextPage<Props> = ({ anglingSpots }) => {
  const render = (status: Status) => {
    return <h1>{status}</h1>
  }
  const center = { lat: 35.4, lng: 139.75 }
  const zoom = 10

  return (
    <div className="h-[100vh] w-[100vw]">
      <Wrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        render={render}
      >
        <GoogleMaps
          center={center}
          zoom={zoom}
          style={{ height: '100%', width: '100%' }}
        >
          {anglingSpots.map((spots, index) => (
            <Marker key={index} position={{ lat: spots.lat, lng: spots.lng }} />
          ))}
        </GoogleMaps>
      </Wrapper>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const anglingSpots = await client.get({
    endpoint: 'angling_spots',
    queries: { limit: 1000 },
  })

  return {
    props: {
      anglingSpots: anglingSpots.contents,
    },
  }
}

export default AnglingMap
