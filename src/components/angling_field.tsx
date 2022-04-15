import Link from 'next/link'
import { icon } from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type Props = {
  anglingField: AnglingField
}

const customIcon = icon({
  iconUrl: '/icon.svg',
  iconSize: [32, 32],
})

const AnglingField: React.FC<Props> = ({ anglingField }) => {
  return (
    <Marker icon={customIcon} position={anglingField.position}>
      <Popup>
        <Link href={`/angling_map/${anglingField.id}`}>
          <a>{anglingField.name}</a>
        </Link>
      </Popup>
    </Marker>
  )
}

export default AnglingField
