import Link from 'next/link'
import { icon } from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { scroller } from 'react-scroll'

type Props = {
  id: string
  title: string
  position: L.LatLngExpression
  iconUrl: string
  link?: boolean
}

const scrollOffset = () => {
  const container = document.getElementById('map-container')
  const containerHeight = container?.clientHeight ?? 0
  return containerHeight * -1 - 10
}

const CustomMarker: React.FC<Props> = ({
  id,
  title,
  position,
  iconUrl,
  link = false,
}) => {
  const customIcon = icon({
    iconUrl: iconUrl,
    iconSize: [30, 42],
  })

  return (
    <Marker
      icon={customIcon}
      position={position}
      eventHandlers={{
        click: () => {
          scroller.scrollTo(id, {
            smooth: true,
            offset: scrollOffset(),
          })
        },
      }}
    >
      {link ? (
        <Popup>
          <Link href={`/angling_map/${id}`}>
            <a className=" !text-[#1A0DAB] underline underline-offset-1">
              {title}
            </a>
          </Link>
        </Popup>
      ) : (
        <Popup>{title}</Popup>
      )}
    </Marker>
  )
}

export default CustomMarker
