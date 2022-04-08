import { Wrapper, Status } from '@googlemaps/react-wrapper'
import Map from './map'
import Marker from './marker'

const GoogleMaps: React.FC = () => {
  const render = (status: Status) => {
    return <h1>{status}</h1>
  }
  return (
    <>
      <div className="h-[50vh] w-[100vw]">
        <Wrapper
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          render={render}
        >
          <Map
            center={{ lat: 35.4, lng: 139.75 }}
            zoom={10}
            style={{ height: '100%', width: '100%' }}
          >
            <Marker position={{ lat: 35.8, lng: 139.8 }} />
          </Map>
        </Wrapper>
      </div>
    </>
  )
}

export default GoogleMaps
