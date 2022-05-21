import { ReactElement } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Meta from '../../components/molecules/meta'
import Leaflet from '../../components/template/leaflet'
import ReactMarkdown from 'react-markdown'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'
import {
  getOtherAnglingFields,
  getAnglingFieldIds,
  getAnglingFieldImages,
} from '../../utils/contentful'
import FieldDetails from '../../components/angling_map/field_details'
import Share from '../../components/molecules/share'
import Layout from '../../components/template/layout'
import { generateFieldImagesPlaceHolder } from '../../utils/plaiceholder'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (pageProps: Props, page: ReactElement) => ReactElement
}

type Props = {
  anglingFields: Entry<IAnglingFieldsFields>[]
  fieldImages: Entry<IAnglingFieldsFields>
}

type Params = {
  id: string
}

const AnglingField: NextPageWithLayout<Props> = ({ fieldImages }) => {
  return (
    <>
      <Meta
        subTitle={fieldImages.fields.name}
        description={fieldImages.fields.description}
        imageUrl={fieldImages.fields.thumbnailUrl}
      />
      <p className="mt-6 text-xs text-[#666666]">
        <Link href="/">
          <a className="underline">トップページ</a>
        </Link>{' '}
        &gt;{' '}
        <Link href="/angling_map">
          <a className="underline">釣り場一覧</a>
        </Link>{' '}
        &gt; <span>{fieldImages.fields.name}</span>
      </p>
      <div className="prose-custom pt-8">
        <h1>{fieldImages.fields.name}</h1>
        <div className="relative aspect-[16/9]">
          <Image
            src={fieldImages.fields.thumbnailUrl}
            alt={fieldImages.fields.name}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL={fieldImages.fields.blurImage}
            className="duration-500"
          />
        </div>
        <ReactMarkdown>{fieldImages.fields.description}</ReactMarkdown>
        {fieldImages.fields.anglingSpot && (
          <FieldDetails
            fieldImages={fieldImages.fields.anglingSpot}
            heading="釣りポイント情報"
          />
        )}
        {fieldImages.fields.parkingAreas && (
          <FieldDetails
            fieldImages={fieldImages.fields.parkingAreas}
            heading="周辺の駐車場情報"
          />
        )}
        {fieldImages.fields.restrooms && (
          <FieldDetails
            fieldImages={fieldImages.fields.restrooms}
            heading="周辺のトイレ情報"
          />
        )}
        {fieldImages.fields.stores && (
          <FieldDetails
            fieldImages={fieldImages.fields.stores}
            heading="周辺の売店・コンビニ情報"
          />
        )}
      </div>
      <div className="prose-custom mt-20">
        <h2>SNSで釣り場情報を共有</h2>
      </div>
      <Share className="mt-5 flex flex-wrap gap-3" size={48} borderRadius={6} />
    </>
  )
}

AnglingField.getLayout = (props, page) => {
  return (
    <>
      <Leaflet
        center={[
          props.fieldImages.fields.position.lat,
          props.fieldImages.fields.position.lon,
        ]}
        zoom={16}
        anglingFields={props.anglingFields}
        fieldImages={props.fieldImages}
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

  const fieldImagesSrc = await getAnglingFieldImages(params?.id)
  const fieldImages = await generateFieldImagesPlaceHolder(fieldImagesSrc[0])

  return {
    props: {
      anglingFields: anglingFields,
      fieldImages: fieldImages,
    },
  }
}

export default AnglingField
