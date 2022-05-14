import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'
import 'leaflet/dist/leaflet.css'
import Markers from '../leaflet/markers'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

type Props = {
  center?: L.LatLngExpression
  zoom: number
  anglingFields: Entry<IAnglingFieldsFields>[]
  fieldImages?: Entry<IAnglingFieldsFields>
}

const Leaflet: React.FC<Props> = ({
  center,
  zoom,
  anglingFields,
  fieldImages,
}) => {
  const Map = useMemo(
    () =>
      dynamic(() => import('../leaflet/map'), {
        loading: () => (
          <div className="flex h-[calc(100vh/2.4)] items-center justify-center bg-teal-100">
            <AiOutlineLoading3Quarters className="animate-spin text-6xl text-gray-500" />
          </div>
        ),
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
        <Markers anglingFields={anglingFields} fieldImages={fieldImages} />
        <TitlePopup />
      </Map>
    </div>
  )
}

export default Leaflet
