import { icon } from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type Props = {
  fieldImage: {
    title: string
    position: {
      lat: number
      lng: number
    }
  }
}

const customIcon = icon({
  iconUrl: '/icon.svg',
  iconSize: [32, 32],
})

const FieldImage: React.FC<Props> = ({ fieldImage }) => {
  return (
    <Marker icon={customIcon} position={fieldImage.position}>
      <Popup>{fieldImage.title}</Popup>
    </Marker>
  )
}

export default FieldImage
