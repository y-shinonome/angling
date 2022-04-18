import type { ReactElement } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Leaflet from '../../components/leaflet'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'
import {
  getOtherAnglingFields,
  getAnglingFieldIds,
  getAnglingField,
} from '../../utils/contentful'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (pageProps: Props, page: ReactElement) => ReactElement
}

type Props = {
  anglingFields: Entry<IAnglingFieldsFields>[]
  detailedAnglingField: Entry<IAnglingFieldsFields>
}

type Params = {
  id: string
}

const AnglingField: NextPageWithLayout<Props> = ({ detailedAnglingField }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold">
        {detailedAnglingField.fields.name}
      </h1>
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
        center={[
          props.detailedAnglingField.fields.position.lat,
          props.detailedAnglingField.fields.position.lon,
        ]}
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
  const paths = items.map((item) => ({
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
  const anglingFields = await getOtherAnglingFields(params?.id)

  const detailedAnglingField = await getAnglingField(params?.id)
  return {
    props: {
      anglingFields: anglingFields,
      detailedAnglingField: detailedAnglingField[0],
    },
  }
}

export default AnglingField
