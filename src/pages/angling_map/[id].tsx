import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  getOtherAnglingFields,
  getAnglingFieldIds,
  getAnglingField,
} from '../../utils/contentful'

type Props = {
  anglingFields: AnglingField[]
  detailedAnglingField: AnglingField
}

type Params = {
  id: string
}

const AnglingField: NextPage<Props> = ({
  anglingFields,
  detailedAnglingField,
}) => {
  const Leaflet = dynamic(() => import('../../components/leaflet'), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  })
  const center: Position = detailedAnglingField.position
  const zoom: number = 16

  return (
    <>
      <Leaflet
        center={center}
        zoom={zoom}
        anglingFields={anglingFields}
        detailedAnglingField={detailedAnglingField}
        className="sticky top-0 mb-3"
      />
      <h1 className="text-2xl font-semibold">{detailedAnglingField.name}</h1>
      <p className="mt-10">
        <Link href={`/angling_map`}>
          <a>釣り場を探す</a>
        </Link>
      </p>
      <p>
        <Link href="/">
          <a>TOP</a>
        </Link>
      </p>
    </>
  )
}

export const getStaticPaths = async () => {
  const items = await getAnglingFieldIds()
  const paths = items.map((item: any) => ({
    params: { id: item.sys.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const anglingFields = (await getOtherAnglingFields(params?.id)).map(
    (item: any) => {
      return {
        id: item.sys.id,
        name: item.fields.name,
        position: {
          lat: item.fields.position.lat,
          lng: item.fields.position.lon,
        },
      }
    }
  )

  const detailedAnglingField: any = await getAnglingField(params?.id)
  return {
    props: {
      anglingFields: anglingFields,
      detailedAnglingField: {
        name: detailedAnglingField[0].fields.name,
        position: {
          lat: detailedAnglingField[0].fields.position.lat,
          lng: detailedAnglingField[0].fields.position.lon,
        },
        fieldImages: detailedAnglingField[0].fields.fieldImages ?? null,
        restrooms: detailedAnglingField[0].fields.restrooms ?? null,
        stores: detailedAnglingField[0].fields.stores ?? null,
        notices: detailedAnglingField[0].fields.notices ?? null,
      },
    },
  }
}

export default AnglingField
