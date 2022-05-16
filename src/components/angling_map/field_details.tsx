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
          <h3
            id={fieldImage.sys.id}
            className="mr-2 border-l-8 border-b-2 border-teal-200 pl-1"
          >
            {fieldImage.fields.title}
          </h3>
          {fieldImage.fields.imageUrl && (
            <>
              <div className="relative aspect-[16/9]">
                <Image
                  src={fieldImage.fields.imageUrl}
                  alt={fieldImage.fields.title}
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={fieldImage.fields.blurImage}
                  className="duration-500"
                />
              </div>
              <PositionPopup
                title={fieldImage.fields.title}
                lat={fieldImage.fields.position.lat}
                lon={fieldImage.fields.position.lon}
                className="w-full py-1 px-2 text-sm"
              />
            </>
          )}
          {fieldImage.fields.comment && (
            <ReactMarkdown className="ml-3">
              {fieldImage.fields.comment}
            </ReactMarkdown>
          )}
        </div>
      ))}
    </>
  )
}

export default FieldDetails
