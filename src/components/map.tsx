import { useEffect, useRef } from 'react'
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
  const mapRef = useRef<L.Map>()

  const resizeObserver = new ResizeObserver(() => {
    mapRef.current?.invalidateSize()
  })

  useEffect(() => {
    if (document.getElementById('map-container')) {
      const container = document.getElementById('map-container')
      resizeObserver.observe(container!)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    mapRef.current?.setView(center, zoom)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children])

  return (
    <ResizableContainer>
      <MapContainer
        id="map-container"
        center={center}
        zoom={zoom}
        zoomAnimationThreshold={10}
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance
        }}
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
