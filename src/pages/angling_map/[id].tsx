import { ReactElement } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Leaflet from '../../components/template/leaflet'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'
import {
  getOtherAnglingFields,
  getAnglingFieldIds,
  getAnglingField,
} from '../../utils/contentful'
import SpotDetails from '../../components/spot_details'
import Layout from '../../components/layout'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (pageProps: Props, page: ReactElement) => ReactElement
}

type Props = {
  anglingFields: Entry<IAnglingFieldsFields>[]
  fieldInformation: Entry<IAnglingFieldsFields>
}

type Params = {
  id: string
}

const AnglingField: NextPageWithLayout<Props> = ({ fieldInformation }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold">{fieldInformation.fields.name}</h1>
      {fieldInformation.fields.fieldImages?.map((fieldImage, index) => (
        <div key={index}>
          <SpotDetails fieldImage={fieldImage} />
        </div>
      ))}
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
          props.fieldInformation.fields.position.lat,
          props.fieldInformation.fields.position.lon,
        ]}
        zoom={16}
        anglingFields={props.anglingFields}
        fieldInformation={props.fieldInformation}
      />
      <Layout>{page}</Layout>
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
  const fieldInformation = await getAnglingField(params?.id)
  return {
    props: {
      anglingFields: anglingFields,
      fieldInformation: fieldInformation[0],
    },
  }
}

export default AnglingField
