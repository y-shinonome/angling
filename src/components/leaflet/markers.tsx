import dynamic from 'next/dynamic'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'

type Props = {
  anglingFields: Entry<IAnglingFieldsFields>[]
  fieldInformation?: Entry<IAnglingFieldsFields>
}

const Markers: React.FC<Props> = ({ anglingFields, fieldInformation }) => {
  const AnglingField = dynamic(() => import('../leaflet/angling_field'), {
    loading: () => null,
    ssr: false,
  })

  const FieldImage = dynamic(() => import('../leaflet/field_image'), {
    loading: () => null,
    ssr: false,
  })

  return (
    <>
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
      {fieldInformation?.fields.parkingAreas &&
        fieldInformation.fields.parkingAreas.map((fieldImage, index) => (
          <FieldImage
            key={index}
            fieldImage={fieldImage}
            iconUrl="/icons/parking_area.svg"
          />
        ))}
      {fieldInformation?.fields.restrooms &&
        fieldInformation.fields.restrooms.map((fieldImage, index) => (
          <FieldImage
            key={index}
            fieldImage={fieldImage}
            iconUrl="/icons/restroom.svg"
          />
        ))}
      {fieldInformation?.fields.stores &&
        fieldInformation.fields.stores.map((fieldImage, index) => (
          <FieldImage
            key={index}
            fieldImage={fieldImage}
            iconUrl="/icons/store.svg"
          />
        ))}
    </>
  )
}

export default Markers
