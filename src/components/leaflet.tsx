import { icon } from 'leaflet'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ScaleControl,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type Props = {
  center: L.LatLngExpression
  zoom: number
  anglingSpots: {
    name: string
    position: L.LatLngExpression
  }[]
}

const customIcon = icon({
  iconUrl: '/icon.svg',
  iconSize: [32, 32],
})

const Leaflet: React.FC<Props> = ({ center, zoom, anglingSpots }) => {
  return (
    <>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '50vh', width: '100%' }}
      >
        <TileLayer
          maxNativeZoom={19}
          maxZoom={20}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ScaleControl />
        {anglingSpots.map((spot, index) => (
          <Marker key={index} icon={customIcon} position={spot.position}>
            <Popup>{spot.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  )
}

export default Leaflet
