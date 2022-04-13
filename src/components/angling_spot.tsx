import Link from 'next/link'
import { icon } from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type Props = {
  anglingSpot: AnglingSpot
}

const customIcon = icon({
  iconUrl: '/icon.svg',
  iconSize: [32, 32],
})

const AnglingSpot: React.FC<Props> = ({ anglingSpot }) => {
  return (
    <Marker icon={customIcon} position={anglingSpot.position}>
      <Popup>
        <Link href={`/angling_map/${anglingSpot.contentId}`}>
          <a>{anglingSpot.name}</a>
        </Link>
      </Popup>
    </Marker>
  )
}

export default AnglingSpot
