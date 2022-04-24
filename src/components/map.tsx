import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, ScaleControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import ResizableContainer from './resizable_container'

type Props = {
  center: L.LatLngExpression
  zoom: number
}

const MAP_TILE_URL = `https://api.maptiler.com/maps/outdoor/256/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAP_TILER_API_KEY}`

const Map: React.FC<Props> = ({ center, zoom, children }) => {
  const mapRef = useRef<L.Map>()

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
    mapRef.current?.flyTo(center, zoom, { duration: 0.8 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children])

  return (
    <ResizableContainer>
      <MapContainer
        id="map-container"
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance
        }}
      >
        <TileLayer maxNativeZoom={22} maxZoom={22} url={MAP_TILE_URL} />
        <ScaleControl />
        {children}
      </MapContainer>
    </ResizableContainer>
  )
}

export default Map
