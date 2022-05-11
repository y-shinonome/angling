import dynamic from 'next/dynamic'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'

type Props = {
  anglingFields: Entry<IAnglingFieldsFields>[]
  fieldInformation?: Entry<IAnglingFieldsFields>
}

const Markers: React.FC<Props> = ({ anglingFields, fieldInformation }) => {
  const CustomMarker = dynamic(() => import('../leaflet/custom_marker'), {
    loading: () => null,
    ssr: false,
  })

  return (
    <>
      {anglingFields.map((anglingField, index) => (
        <CustomMarker
          key={index}
          id={anglingField.sys.id}
          title={anglingField.fields.name}
          position={[
            anglingField.fields.position.lat,
            anglingField.fields.position.lon,
          ]}
          iconUrl="/icons/angling_field.svg"
          link={true}
        />
      ))}
      {fieldInformation?.fields.anglingSpot &&
        fieldInformation.fields.anglingSpot.map((fieldImage, index) => (
          <CustomMarker
            key={index}
            id={fieldImage.sys.id}
            title={fieldImage.fields.title}
            position={[
              fieldImage.fields.position.lat,
              fieldImage.fields.position.lon,
            ]}
            iconUrl="/icons/angling_spot.svg"
          />
        ))}
      {fieldInformation?.fields.parkingAreas &&
        fieldInformation.fields.parkingAreas.map((fieldImage, index) => (
          <CustomMarker
            key={index}
            id={fieldImage.sys.id}
            title={fieldImage.fields.title}
            position={[
              fieldImage.fields.position.lat,
              fieldImage.fields.position.lon,
            ]}
            iconUrl="/icons/parking_area.svg"
          />
        ))}
      {fieldInformation?.fields.restrooms &&
        fieldInformation.fields.restrooms.map((fieldImage, index) => (
          <CustomMarker
            key={index}
            id={fieldImage.sys.id}
            title={fieldImage.fields.title}
            position={[
              fieldImage.fields.position.lat,
              fieldImage.fields.position.lon,
            ]}
            iconUrl="/icons/restroom.svg"
          />
        ))}
      {fieldInformation?.fields.stores &&
        fieldInformation.fields.stores.map((fieldImage, index) => (
          <CustomMarker
            key={index}
            id={fieldImage.sys.id}
            title={fieldImage.fields.title}
            position={[
              fieldImage.fields.position.lat,
              fieldImage.fields.position.lon,
            ]}
            iconUrl="/icons/store.svg"
          />
        ))}
    </>
  )
}

export default Markers
