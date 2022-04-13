import {
  MapContainer,
  TileLayer,
  ScaleControl,
  AttributionControl,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import ResizableContainer from './resizable_container'

type Props = {
  center: Position
  zoom: number
}

const Map: React.FC<Props> = ({ center, zoom, children }) => {
  const setMap = (map: L.Map) => {
    const resizeObserver = new ResizeObserver(() => {
      //invalidateSizeの未定義エラーを無理やり回避
      try {
        map.invalidateSize()
      } catch (e) {}
    })
    const container = document.getElementById('map-container')
    resizeObserver.observe(container!)
  }

  return (
    <ResizableContainer>
      <MapContainer
        id="map-container"
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
        whenCreated={setMap}
      >
        <TileLayer
          maxNativeZoom={19}
          maxZoom={20}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AttributionControl position="topright" />
        <ScaleControl />
        {children}
      </MapContainer>
    </ResizableContainer>
  )
}

export default Map
