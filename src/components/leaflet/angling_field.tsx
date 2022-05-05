import { useRouter } from 'next/router'
import { icon } from 'leaflet'
import { Marker } from 'react-leaflet'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'

type Props = {
  anglingField: Entry<IAnglingFieldsFields>
}

const customIcon = icon({
  iconUrl: '/icons/angling_field.svg',
  iconSize: [30, 42],
})

const AnglingField: React.FC<Props> = ({ anglingField }) => {
  const router = useRouter()
  return (
    <Marker
      icon={customIcon}
      position={[
        anglingField.fields.position.lat,
        anglingField.fields.position.lon,
      ]}
      eventHandlers={{
        click: () => {
          router.push(`/angling_map/${anglingField.sys.id}`)
        },
      }}
    ></Marker>
  )
}

export default AnglingField
