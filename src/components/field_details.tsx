import { useContext } from 'react'
import Image from 'next/image'
import type { Entry } from 'contentful'
import type { IFieldImagesFields } from '../../@types/contentful'
import ReactMarkdown from 'react-markdown'
import { PopupContext } from '../context/popup_context'

type Props = {
  fieldImage: Entry<IFieldImagesFields>
}

const FieldDetails: React.FC<Props> = ({ fieldImage }) => {
  const { setPopup } = useContext(PopupContext)

  const clickHandler = () => {
    setPopup({
      title: fieldImage.fields.title,
      lat: fieldImage.fields.position.lat,
      lon: fieldImage.fields.position.lon,
    })
  }

  return (
    <>
      <h3
        className="mt-10 text-xl"
        id={fieldImage.sys.id}
        onClick={clickHandler}
      >
        {fieldImage.fields.title}
      </h3>
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
        // eslint-disable-next-line react/no-children-prop
        <ReactMarkdown children={fieldImage.fields.comment} />
      )}
    </>
  )
}

export default FieldDetails
