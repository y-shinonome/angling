import { useState, useEffect, useContext } from 'react'
import { MapContext } from '../contexts/map_context'

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>()
  const map = useContext(MapContext)

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker())
    }

    return () => {
      if (marker) {
        marker.setMap(null)
      }
    }
  }, [marker])

  useEffect(() => {
    if (marker) {
      marker.setOptions(options)
    }
  }, [marker, options])

  if (marker && options.position) {
    marker.addListener('click', () => {
      if (options.position) {
        map?.setCenter(options.position)
      }
      map?.setZoom(17)
    })
  }

  return null
}

export default Marker
