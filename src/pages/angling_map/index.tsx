import type { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Leaflet from '../../components/template/leaflet'
import ReactMarkdown from 'react-markdown'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'
import { getAnglingFields } from '../../utils/contentful'
import Layout from '../../components/layout'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (pageProps: Props, page: ReactElement) => ReactElement
}

type Props = {
  anglingFields: Entry<IAnglingFieldsFields>[]
}

const zoom: number = 10

const AnglingMap: NextPageWithLayout<Props> = ({ anglingFields }) => {
  return (
    <>
      <ul>
        {anglingFields.map((anglingField, index) => (
          <li key={index} className="mb-10 text-lg">
            <Link href={`/angling_map/${anglingField.sys.id}`}>
              <a className="text-xl font-semibold">
                {anglingField.fields.name}
              </a>
            </Link>
            <div className="relative aspect-[1.91/1]">
              <Image
                src={anglingField.fields.thumbnailUrl}
                alt={anglingField.fields.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <ReactMarkdown // eslint-disable-next-line react/no-children-prop
              children={anglingField.fields.description}
              className="text-sm"
            />
          </li>
        ))}
      </ul>
      <Link href={`/`}>
        <a>top</a>
      </Link>
    </>
  )
}

AnglingMap.getLayout = (props, page) => {
  return (
    <>
      <Leaflet zoom={zoom} anglingFields={props.anglingFields} />
      <Layout>{page}</Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const anglingFields = await getAnglingFields()

  return {
    props: {
      anglingFields: anglingFields,
    },
  }
}

export default AnglingMap
