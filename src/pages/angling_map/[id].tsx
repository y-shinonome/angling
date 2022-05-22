import { ReactElement, useState } from 'react'
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
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch('/api/addComment', {
      body: JSON.stringify({
        pageId: fieldImages.sys.id,
        name: name,
        comment: comment,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    console.log(res)
  }

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
      <h2 className="mt-20 mb-2 font-bold">SNSで釣り場情報を共有</h2>
      <Share className="flex flex-wrap gap-3" size={48} borderRadius={6} />
      <h2 className="mt-20 mb-2 font-bold">
        {fieldImages.fields.name}についてのコメント
      </h2>
      <hr />
      <p className="my-3 text-sm">まだ投稿されたコメントがありません</p>
      <hr />
      <form className="mt-6 grid grid-cols-1 text-xs" onSubmit={handleSubmit}>
        <label className="block">
          <span>名前</span>
          <input
            type="text"
            className="mt-1 w-full rounded border-teal-200 text-sm placeholder:text-slate-400 focus:border-indigo-300 focus:ring-indigo-200"
            maxLength={32}
            placeholder="何も入力しなければ「匿名」表示になります"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </label>
        <label className="mt-3 block">
          <span>コメント</span>
          <span className="ml-1 text-slate-400">(必須)</span>
          <textarea
            className="mt-1 w-full rounded border-teal-200 text-sm placeholder:text-slate-400 focus:border-indigo-300 focus:ring-indigo-200"
            required={true}
            maxLength={500}
            placeholder="500文字以内"
            rows={4}
            onChange={(e) => {
              setComment(e.target.value)
            }}
          ></textarea>
        </label>
        <button className="mt-2 rounded bg-teal-100 px-10 py-1 text-sm shadow shadow-gray-400/40 duration-300 hover:bg-black/10">
          コメントを残す
        </button>
      </form>
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
