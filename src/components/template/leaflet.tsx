import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'
import 'leaflet/dist/leaflet.css'

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

  const AnglingField = dynamic(() => import('../leaflet/angling_field'), {
    loading: () => null,
    ssr: false,
  })

  const FieldImage = dynamic(() => import('../leaflet/field_image'), {
    loading: () => null,
    ssr: false,
  })

  const TitlePopup = dynamic(() => import('../leaflet/title_popup'), {
    loading: () => null,
    ssr: false,
  })

  return (
    <div className="sticky top-0 z-10 mb-3 shadow-[0_4px_4px_0_rgba(0,0,0,0.2)]">
      <Map center={center} zoom={zoom}>
        {anglingFields.map((anglingField, index) => (
          <AnglingField key={index} anglingField={anglingField} />
        ))}
        {fieldInformation?.fields.anglingSpot &&
          fieldInformation.fields.anglingSpot.map((fieldImage, index) => (
            <FieldImage
              key={index}
              fieldImage={fieldImage}
              iconUrl="/icons/angling_spot.svg"
            />
          ))}
        <TitlePopup />
      </Map>
    </div>
  )
}

export default Leaflet
