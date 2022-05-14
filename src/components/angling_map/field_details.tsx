import Image from 'next/image'
import type { Entry } from 'contentful'
import type { IFieldImagesFields } from '../../../@types/contentful'
import ReactMarkdown from 'react-markdown'
import PositionPopup from './position_popup'

type Props = {
  fieldImages: Entry<IFieldImagesFields>[]
  heading: string
}

const FieldDetails: React.FC<Props> = ({ fieldImages, heading }) => {
  return (
    <>
      <h2>{heading}</h2>
      {fieldImages.map((fieldImage, index) => (
        <div key={index}>
          <h3 id={fieldImage.sys.id}>{fieldImage.fields.title}</h3>
          <PositionPopup
            title={fieldImage.fields.title}
            lat={fieldImage.fields.position.lat}
            lon={fieldImage.fields.position.lon}
          />
          {fieldImage.fields.imageUrl && (
            <div className="relative aspect-[16/9]">
              <Image
                src={fieldImage.fields.imageUrl}
                alt={fieldImage.fields.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
          {fieldImage.fields.comment && (
            <ReactMarkdown>{fieldImage.fields.comment}</ReactMarkdown>
          )}
        </div>
      ))}
    </>
  )
}

export default FieldDetails
