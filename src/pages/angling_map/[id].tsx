import { ReactElement } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Leaflet from '../../components/template/leaflet'
import ReactMarkdown from 'react-markdown'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'
import {
  getOtherAnglingFields,
  getAnglingFieldIds,
  getAnglingField,
} from '../../utils/contentful'
import FieldDetails from '../../components/field_details'
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
      <div className="relative aspect-[16/9]">
        <Image
          src={fieldInformation.fields.thumbnailUrl}
          alt={fieldInformation.fields.name}
          layout="fill"
          objectFit="contain"
        />
      </div>
      {/* eslint-disable-next-line react/no-children-prop */}
      <ReactMarkdown children={fieldInformation.fields.description} />
      <h2 className="mt-20 text-xl">釣り場情報</h2>
      {fieldInformation.fields.anglingSpot?.map((fieldImage, index) => (
        <div key={index}>
          <FieldDetails fieldImage={fieldImage} />
        </div>
      ))}
      <h2 className="mt-20 text-xl">トイレ情報</h2>
      {fieldInformation.fields.restrooms?.map((fieldImage, index) => (
        <div key={index}>
          <FieldDetails fieldImage={fieldImage} />
        </div>
      ))}
      <h2 className="mt-20 text-xl">駐車場情報</h2>
      {fieldInformation.fields.parkingAreas?.map((fieldImage, index) => (
        <div key={index}>
          <FieldDetails fieldImage={fieldImage} />
        </div>
      ))}
      <h2 className="mt-20 text-xl">売店・コンビニ情報</h2>
      {fieldInformation.fields.stores?.map((fieldImage, index) => (
        <div key={index}>
          <FieldDetails fieldImage={fieldImage} />
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
