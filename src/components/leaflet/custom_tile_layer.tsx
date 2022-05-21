import { useRef, useEffect } from 'react'
import { useToggle } from 'react-use'
import { TileLayer } from 'react-leaflet'
import { BsLayersHalf } from 'react-icons/bs'

const outdoorMapTileURL = `https://api.maptiler.com/maps/outdoor/256/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAP_TILER_API_KEY}`
const satelliteMapTileURL = `https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=${process.env.NEXT_PUBLIC_MAP_TILER_API_KEY}`

const CustomTileLayer: React.FC = () => {
  const tileRef = useRef<L.TileLayer>(null)
  const [showsSatelliteMap, toggle] = useToggle(false)

  useEffect(() => {
    if (tileRef.current) {
      tileRef.current.setUrl(
        showsSatelliteMap ? satelliteMapTileURL : outdoorMapTileURL
      )
    }
  }, [showsSatelliteMap])

  return (
    <>
      <TileLayer
        maxNativeZoom={22}
        maxZoom={22}
        minZoom={5}
        url={showsSatelliteMap ? satelliteMapTileURL : outdoorMapTileURL}
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> | <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        ref={tileRef}
      />
      <div className="leaflet-bottom leaflet-right mb-[110px]" onClick={toggle}>
        <div className="leaflet-bar leaflet-control !cursor-pointer">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-sm bg-white p-[2px] hover:bg-[#f4f4f4]">
            <BsLayersHalf className=" text-xl" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomTileLayer
