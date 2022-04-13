import { MapContainer, TileLayer, ScaleControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import AnglingSpot from './angling_spot'
import FieldImage from './field_image'

type Props = {
  center: L.LatLngExpression
  zoom: number
  anglingSpots: AnglingSpot[]
  anglingField?: AnglingField
}

const isDuplicatePosition = (
  actual: Position,
  expected: Position | undefined
) => {
  if (actual.lat === expected?.lat && actual.lng === expected?.lng) {
    return true
  } else {
    return false
  }
}

const Leaflet: React.FC<Props> = ({
  center,
  zoom,
  anglingSpots,
  anglingField,
}) => {
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
        {anglingSpots.map(
          (anglingSpot, index) =>
            !isDuplicatePosition(
              anglingSpot.position,
              anglingField?.position
            ) && <AnglingSpot key={index} anglingSpot={anglingSpot} />
        )}
        {anglingField?.fieldImages &&
          anglingField.fieldImages.map((fieldImage, index) => (
            <FieldImage key={index} fieldImage={fieldImage} />
          ))}
      </MapContainer>
    </>
  )
}

export default Leaflet
