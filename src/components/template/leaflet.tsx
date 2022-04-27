import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'
import 'leaflet/dist/leaflet.css'
import Markers from '../leaflet/markers'

type Props = {
  center?: L.LatLngExpression
  zoom: number
  anglingFields: Entry<IAnglingFieldsFields>[]
  fieldInformation?: Entry<IAnglingFieldsFields>
}

const Leaflet: React.FC<Props> = ({
  center,
  zoom,
  anglingFields,
  fieldInformation,
}) => {
  const Map = useMemo(
    () =>
      dynamic(() => import('../leaflet/map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  )

  const TitlePopup = dynamic(() => import('../leaflet/title_popup'), {
    loading: () => null,
    ssr: false,
  })

  return (
    <div className="sticky top-0 z-10 mb-3 shadow-[0_4px_4px_0_rgba(0,0,0,0.2)]">
      <Map center={center} zoom={zoom}>
        <Markers
          anglingFields={anglingFields}
          fieldInformation={fieldInformation}
        />
        <TitlePopup />
      </Map>
    </div>
  )
}

export default Leaflet
