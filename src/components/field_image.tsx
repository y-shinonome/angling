import { icon } from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import type { Entry } from 'contentful'
import type { IFieldImagesFields } from '../../@types/contentful'
import 'leaflet/dist/leaflet.css'

type Props = {
  fieldImage: Entry<IFieldImagesFields>
}

const customIcon = icon({
  iconUrl: '/icon.svg',
  iconSize: [32, 32],
})

const FieldImage: React.FC<Props> = ({ fieldImage }) => {
  return (
    <Marker
      icon={customIcon}
      position={[
        fieldImage.fields.position.lat,
        fieldImage.fields.position.lon,
      ]}
    >
      <Popup>{fieldImage.fields.title}</Popup>
    </Marker>
  )
}

export default FieldImage
