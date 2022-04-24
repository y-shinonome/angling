import type { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Link from 'next/link'
import Leaflet from '../../components/template/leaflet'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'
import { getAnglingFields } from '../../utils/contentful'

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
          <li key={index}>
            <Link href={`/angling_map/${anglingField.sys.id}`}>
              <a>{anglingField.fields.name}</a>
            </Link>
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
      {page}
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
