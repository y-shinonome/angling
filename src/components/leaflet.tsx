import 'leaflet/dist/leaflet.css'
import Map from './map'
import AnglingSpot from './angling_spot'
import FieldImage from './field_image'

type Props = {
  center: Position
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
    <div className="mb-3">
      <Map center={center} zoom={zoom}>
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
      </Map>
    </div>
  )
}

export default Leaflet
