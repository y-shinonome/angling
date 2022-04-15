import 'leaflet/dist/leaflet.css'
import Map from './map'
import AnglingField from './angling_field'
import FieldImage from './field_image'

type Props = {
  center: Position
  zoom: number
  anglingFields: AnglingField[]
  detailedAnglingField?: AnglingField
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
  anglingFields,
  detailedAnglingField,
}) => {
  return (
    <div className="mb-3">
      <Map center={center} zoom={zoom}>
        {anglingFields.map(
          (anglingField, index) =>
            !isDuplicatePosition(
              anglingField.position,
              detailedAnglingField?.position
            ) && <AnglingField key={index} anglingField={anglingField} />
        )}
        {detailedAnglingField?.fieldImages &&
          detailedAnglingField.fieldImages.map((fieldImage, index) => (
            <FieldImage key={index} fieldImage={fieldImage.fields} />
          ))}
      </Map>
    </div>
  )
}

export default Leaflet
