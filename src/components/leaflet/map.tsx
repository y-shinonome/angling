import { useEffect, useRef } from 'react'
import {
  MapContainer,
  ScaleControl,
  ZoomControl,
  AttributionControl,
} from 'react-leaflet'
import CustomTileLayer from './custom_tile_layer'
import 'leaflet/dist/leaflet.css'
import ResizableContainer from './resizable_container'
import LocationFound from './location_found'
import LocationProvider from '../../context/location_context'
import LocationMarker from './location_marker'

type Props = {
  center?: L.LatLngExpression
  zoom: number
}

const Map: React.FC<Props> = ({ center, zoom, children }) => {
  const mapRef = useRef<L.Map>()

  const loadCenter = () => {
    if (typeof center === 'undefined') {
      if (typeof mapRef.current !== 'undefined') {
        return mapRef.current.getCenter()
      } else {
        return { lat: 35.45, lng: 139.85 }
      }
    } else {
      return center
    }
  }

  const resizeObserver = new ResizeObserver(() => {
    try {
      mapRef.current?.invalidateSize()
    } catch (e) {
      //釣り場の個別ページからブラウザの"戻る"ボタンでTOPページまで戻ると
      //プロパティ未定義のエラーが発生するが、動作に影響がないため無視する。
    }
  })

  useEffect(() => {
    if (document.getElementById('map-container')) {
      const container = document.getElementById('map-container')
      resizeObserver.observe(container!)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    mapRef.current?.flyTo(loadCenter(), zoom, { duration: 0.8 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children])

  return (
    <ResizableContainer>
      <MapContainer
        id="map-container"
        center={loadCenter()}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
        zoomControl={false}
        maxBounds={[
          [46.5229, 122.9343],
          [24.0479, 153.9848],
        ]}
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance
        }}
      >
        <CustomTileLayer />
        <AttributionControl position="topleft" />
        <ScaleControl />
        <ZoomControl position="bottomright" />
        <LocationProvider>
          <LocationFound />
          <LocationMarker />
        </LocationProvider>
        {children}
      </MapContainer>
    </ResizableContainer>
  )
}

export default Map
