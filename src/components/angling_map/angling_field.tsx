import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'
import Link from 'next/link'
import Image from 'next/image'
import PositionPopup from '../../components/angling_map/position_popup'

type Props = {
  anglingField: Entry<IAnglingFieldsFields>
}

export const AnglingField: React.FC<Props> = ({ anglingField }) => {
  return (
    <>
      <li id={anglingField.sys.id}>
        <div className="flex items-stretch justify-between px-3 duration-300 hover:bg-teal-200/30">
          <Link href={`/angling_map/${anglingField.sys.id}`}>
            <a className="block flex-grow py-2">
              <h3 className="blocka text-sm font-bold">
                {anglingField.fields.name}
              </h3>
              <p className="mr-5 mt-3 text-xs text-gray-500 line-clamp-3">
                {anglingField.fields.description}
              </p>
            </a>
          </Link>
          <div className="flex flex-col py-2">
            <Link href={`/angling_map/${anglingField.sys.id}`}>
              <a className="block flex-grow">
                <div className="relative aspect-[1.91/1] w-[33vw] max-w-[200px] ">
                  <Image
                    src={anglingField.fields.thumbnailUrl}
                    alt={anglingField.fields.name}
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL={`${anglingField.fields.thumbnailUrl}?w=20&h=10&fm=webp`}
                    className="duration-500"
                  />
                </div>
              </a>
            </Link>
            <PositionPopup
              title={anglingField.fields.name}
              lat={anglingField.fields.position.lat}
              lon={anglingField.fields.position.lon}
              id={anglingField.sys.id}
              className="mt-2 w-full py-1 text-xs"
            />
          </div>
        </div>
      </li>
      <hr className="my-5" />
    </>
  )
}

export default AnglingField
