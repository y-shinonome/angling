import Image from 'next/image'
import type { Entry } from 'contentful'
import type { IFieldImagesFields } from '../../../@types/contentful'
import CustomReactMarkdown from '../react_markdown/custom_react_markdown'
import PositionPopup from './position_popup'

type Props = {
  fieldImages: Entry<IFieldImagesFields>[]
  heading: string
}

const FieldDetails: React.FC<Props> = ({ fieldImages, heading }) => {
  return (
    <>
      <h2 className="mx-3">{heading}</h2>
      {fieldImages.map((fieldImage, index) => (
        <div key={index}>
          <div className="mx-3">
            <h3 id={fieldImage.sys.id} className="!mb-0 font-bold">
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
                    blurDataURL={`${fieldImage.fields.imageUrl}?w=20&h=10&fm=webp`}
                    className="duration-500"
                  />
                </div>
              </>
            )}
            <PositionPopup
              title={fieldImage.fields.title}
              lat={fieldImage.fields.position.lat}
              lon={fieldImage.fields.position.lon}
              className="w-full py-1 px-2 text-sm"
            />
            {fieldImage.fields.comment && (
              <CustomReactMarkdown article={fieldImage.fields.comment} />
            )}
          </div>
          {fieldImages.length !== index + 1 ? <hr /> : <br />}
        </div>
      ))}
    </>
  )
}

export default FieldDetails
