import { MapContainer, TileLayer, ScaleControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type Props = {
  center: Position
  zoom: number
}

const AnglingSpot: React.FC<Props> = ({ center, zoom, children }) => {
  return (
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
      {children}
    </MapContainer>
  )
}

export default AnglingSpot
