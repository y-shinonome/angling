import { useEffect, useRef } from 'react'
import {
  MapContainer,
  TileLayer,
  ScaleControl,
  ZoomControl,
  AttributionControl,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import ResizableContainer from './resizable_container'
import LocationFound from './location_found'
import LocationProvider from '../../context/location_context'
import LocationMarker from './location_marker'
import Usage from '../leaflet/usage'
import UsageProvider from '../../context/usage_context'

type Props = {
  center?: L.LatLngExpression
  zoom: number
}

const MAP_TILE_URL = `https://api.maptiler.com/maps/outdoor/256/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAP_TILER_API_KEY}`

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
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance
        }}
      >
        <TileLayer
          maxNativeZoom={22}
          maxZoom={22}
          url={MAP_TILE_URL}
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> | <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <AttributionControl position="topleft" />
        <ZoomControl position="bottomright" />
        <ScaleControl />
        <LocationProvider>
          <LocationFound />
          <LocationMarker />
        </LocationProvider>
        <UsageProvider>
          <Usage />
        </UsageProvider>
        {children}
      </MapContainer>
    </ResizableContainer>
  )
}

export default Map
