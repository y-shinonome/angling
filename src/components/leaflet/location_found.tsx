import { useContext } from 'react'
import { useMap } from 'react-leaflet'
import { LocationContext } from '../../context/location_context'
import { BiCurrentLocation } from 'react-icons/bi'

const LocationFound: React.FC = () => {
  const { setLocation } = useContext(LocationContext)
  const map = useMap()

  const handleClick = () => {
    map.locate().on('locationfound', function (e) {
      map.flyTo(e.latlng, 18, { duration: 0.8 })
      setLocation(e.latlng)
    })
  }

  return (
    <div className="leaflet-bottom leaflet-right mb-[70px]">
      <div
        onClick={handleClick}
        className="leaflet-bar leaflet-control !cursor-pointer"
      >
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-sm bg-white p-[2px] hover:bg-[#f4f4f4]">
          <BiCurrentLocation className="text-3xl" />
        </div>
      </div>
    </div>
  )
}

export default LocationFound
