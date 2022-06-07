import Image from 'next/image'
import type { Entry } from 'contentful'
import type { IFieldImagesFields } from '../../../@types/contentful'
import ReactMarkdown from 'react-markdown'
import PositionPopup from './position_popup'
import CustomAnchor from '../react_markdown/custom_anchor'
import CustomImage from '../react_markdown/custom_image'

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
                <PositionPopup
                  title={fieldImage.fields.title}
                  lat={fieldImage.fields.position.lat}
                  lon={fieldImage.fields.position.lon}
                  className="w-full py-1 px-2 text-sm"
                />
              </>
            )}
            {fieldImage.fields.comment && (
              <ReactMarkdown
                components={{
                  a: ({ children, ...props }) => {
                    return (
                      <CustomAnchor href={props.href}>{children}</CustomAnchor>
                    )
                  },
                  img: ({ ...props }) => {
                    return <CustomImage src={props.src} alt={props.alt} />
                  },
                }}
              >
                {fieldImage.fields.comment}
              </ReactMarkdown>
            )}
          </div>
          {fieldImages.length !== index + 1 ? <hr /> : <br />}
        </div>
      ))}
    </>
  )
}

export default FieldDetails
