import {
  MapContainer,
  TileLayer,
  ScaleControl,
  AttributionControl,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type Props = {
  center: Position
  zoom: number
}

const AnglingSpot: React.FC<Props> = ({ center, zoom, children }) => {
  return (
    <div className="h-[50vh]">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer
          maxNativeZoom={19}
          maxZoom={20}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AttributionControl position="topright" />
        <ScaleControl />
        {children}
      </MapContainer>
    </div>
  )
}

export default AnglingSpot
