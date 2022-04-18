import type { ReactElement } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Leaflet from '../../components/leaflet'
import {
  getOtherAnglingFields,
  getAnglingFieldIds,
  getAnglingField,
} from '../../utils/contentful'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (pageProps: Props, page: ReactElement) => ReactElement
}

type Props = {
  anglingFields: AnglingField[]
  detailedAnglingField: AnglingField
}

type Params = {
  id: string
}

const AnglingField: NextPageWithLayout<Props> = ({ detailedAnglingField }) => {
  return (
    <>
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

AnglingField.getLayout = (props, page) => {
  return (
    <>
      <Leaflet
        center={props.detailedAnglingField.position}
        zoom={16}
        anglingFields={props.anglingFields}
        detailedAnglingField={props.detailedAnglingField}
        className="sticky top-0 mb-3"
      />
      {page}
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
