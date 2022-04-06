import type { NextPage } from 'next'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import GoogleMaps from '../components/google_maps'
import Marker from '../components/marker'

const AnglingMap: NextPage = () => {
  const render = (status: Status) => {
    return <h1>{status}</h1>
  }
  const center = { lat: 35.4, lng: 139.75 }
  const zoom = 10
  const positions = [
    { lat: 35.6809591, lng: 139.7673068 },
    { lat: 35.698383, lng: 139.773072 },
    { lat: 35.666348, lng: 139.758155 },
  ]

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
          {positions.map((position, index) => (
            <Marker key={index} position={position} />
          ))}
        </GoogleMaps>
      </Wrapper>
    </div>
  )
}

export default AnglingMap
