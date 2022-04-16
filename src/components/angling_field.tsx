import { useRouter } from 'next/router'
import { icon } from 'leaflet'
import { Marker } from 'react-leaflet'

type Props = {
  anglingField: AnglingField
}

const customIcon = icon({
  iconUrl: '/icon.svg',
  iconSize: [32, 32],
})

const AnglingField: React.FC<Props> = ({ anglingField }) => {
  const router = useRouter()
  return (
    <Marker
      icon={customIcon}
      position={anglingField.position}
      eventHandlers={{
        click: () => {
          router.push(`/angling_map/${anglingField.id}`)
        },
      }}
    ></Marker>
  )
}

export default AnglingField
