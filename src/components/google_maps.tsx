import { useRouter } from 'next/router'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import useSWR from 'swr'
import Map from './map'
import Marker from './marker'

type AnglingSpot = {
  title: string
  position: {
    _latitude: number
    _longitude: number
  }
}

const fetcher = (...args: [string]) => fetch(...args).then((res) => res.json())

const GoogleMaps: React.FC = () => {
  const { data } = useSWR('/api/firestore', fetcher)
  const render = (status: Status) => {
    return <h1>{status}</h1>
  }
  const shouldShowMap = useRouter().asPath.indexOf('/angling_map') >= 0

  return (
    <>
      <div
        className={
          shouldShowMap
            ? 'h-[60vh] w-[100vw] resize-y overflow-hidden rounded border '
            : 'h-0 w-0'
        }
      >
        <Wrapper
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          render={render}
        >
          <Map style={{ height: '100%', width: '100%' }}>
            {data?.map((anglingSpot: AnglingSpot, index: number) => (
              <Marker
                key={index}
                position={{
                  lat: anglingSpot.position._latitude,
                  lng: anglingSpot.position._longitude,
                }}
              />
            ))}
          </Map>
        </Wrapper>
      </div>
    </>
  )
}

export default GoogleMaps
