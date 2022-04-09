import {
  useRef,
  useState,
  useEffect,
  Children,
  isValidElement,
  cloneElement,
} from 'react'
import { MapContext } from '../contexts/map_context'

type Props = {
  style: { [key: string]: string }
}

const Map: React.FC<Props> = ({ children, style }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>()

  const options: google.maps.MapOptions = {
    center: { lat: 35.4, lng: 139.74 },
    zoom: 10,
  }

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}))
    }
    if (map) {
      map.setOptions(options)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, map])

  return (
    <>
      <div ref={ref} style={style} />
      <MapContext.Provider value={map}>
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child, { map })
          }
        })}
      </MapContext.Provider>
    </>
  )
}

export default Map
