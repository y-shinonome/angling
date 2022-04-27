import { icon } from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import type { Entry } from 'contentful'
import type { IFieldImagesFields } from '../../../@types/contentful'
import 'leaflet/dist/leaflet.css'
import { scroller } from 'react-scroll'

type Props = {
  fieldImage: Entry<IFieldImagesFields>
  iconUrl: string
}

const scrollOffset = () => {
  const container = document.getElementById('map-container')
  const containerHeight = container?.clientHeight ?? 0
  return containerHeight * -1 - 10
}

const FieldImage: React.FC<Props> = ({ fieldImage, iconUrl }) => {
  const customIcon = icon({
    iconUrl: iconUrl,
    iconSize: [38, 38],
  })

  return (
    <Marker
      icon={customIcon}
      position={[
        fieldImage.fields.position.lat,
        fieldImage.fields.position.lon,
      ]}
      eventHandlers={{
        click: () => {
          scroller.scrollTo(fieldImage.sys.id, {
            smooth: true,
            offset: scrollOffset(),
          })
        },
      }}
    >
      <Popup>{fieldImage.fields.title}</Popup>
    </Marker>
  )
}

export default FieldImage
