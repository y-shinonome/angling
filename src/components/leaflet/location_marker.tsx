import { useContext, useEffect, useRef } from 'react'
import { icon } from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import { LocationContext } from '../../context/location_context'

const customIcon = icon({
  iconUrl: '/icons/location.svg',
  iconSize: [36, 36],
})

const LocationMarker: React.FC = () => {
  const { location } = useContext(LocationContext)
  const markerRef = useRef<L.Marker>(null)

  useEffect(() => {
    markerRef.current?.openPopup()
  }, [location])

  return (
    <>
      {location === null ? null : (
        <Marker position={location} icon={customIcon} ref={markerRef}>
          <Popup>現在地</Popup>
        </Marker>
      )}
    </>
  )
}
export default LocationMarker
