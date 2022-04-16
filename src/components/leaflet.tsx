import 'leaflet/dist/leaflet.css'
import Map from './map'
import AnglingField from './angling_field'
import FieldImage from './field_image'

type Props = {
  center: Position
  zoom: number
  anglingFields: AnglingField[]
  detailedAnglingField?: AnglingField
  className?: string
}

const Leaflet: React.FC<Props> = ({
  center,
  zoom,
  anglingFields,
  detailedAnglingField,
  className,
}) => {
  return (
    <div className={className}>
      <Map center={center} zoom={zoom}>
        {anglingFields.map((anglingField, index) => (
          <AnglingField key={index} anglingField={anglingField} />
        ))}
        {detailedAnglingField?.fieldImages &&
          detailedAnglingField.fieldImages.map((fieldImage, index) => (
            <FieldImage key={index} fieldImage={fieldImage.fields} />
          ))}
      </Map>
    </div>
  )
}

export default Leaflet
