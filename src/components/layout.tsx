import { Wrapper, Status } from '@googlemaps/react-wrapper'
import GoogleMaps from '../components/google_maps'
import Marker from '../components/marker'

const Layout: React.FC = () => {
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
          <GoogleMaps
            center={{ lat: 35.4, lng: 139.75 }}
            zoom={10}
            style={{ height: '100%', width: '100%' }}
          >
            <Marker position={{ lat: 35.8, lng: 139.8 }} />
          </GoogleMaps>
        </Wrapper>
      </div>
    </>
  )
}

export default Layout
