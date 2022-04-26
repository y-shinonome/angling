import { useContext } from 'react'
import Image from 'next/image'
import type { Entry } from 'contentful'
import type { IFieldImagesFields } from '../../@types/contentful'
import ReactMarkdown from 'react-markdown'
import { PopupContext } from '../context/popup_context'

type Props = {
  fieldImage: Entry<IFieldImagesFields>
}

const SpotDetails: React.FC<Props> = ({ fieldImage }) => {
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
      <h2
        className="mt-10 text-xl"
        id={fieldImage.sys.id}
        onClick={clickHandler}
      >
        {fieldImage.fields.title}
      </h2>
      {fieldImage.fields.image && (
        <div className="relative aspect-[16/9]">
          <Image
            src={`https:${fieldImage.fields.image?.fields.file.url}`}
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

export default SpotDetails
