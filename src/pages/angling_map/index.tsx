import type { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Leaflet from '../../components/template/leaflet'
import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../../@types/contentful'
import Meta from '../../components/molecules/meta'
import { getAnglingFields } from '../../utils/contentful'
import Layout from '../../components/template/layout'
import AnglingField from '../../components/angling_map/angling_field'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (pageProps: Props, page: ReactElement) => ReactElement
}

type Props = {
  anglingFields: Entry<IAnglingFieldsFields>[]
}

const AnglingMap: NextPageWithLayout<Props> = ({ anglingFields }) => {
  return (
    <>
      <Meta subTitle="釣り場一覧" />
      <h2 className="my-8 mx-3 border-b-2 border-teal-400 text-lg font-bold text-[#2a2a2a]">
        釣り場一覧
      </h2>
      <ul>
        {anglingFields.map((anglingField, index) => (
          <div key={index}>
            <AnglingField anglingField={anglingField} />
          </div>
        ))}
      </ul>
    </>
  )
}

AnglingMap.getLayout = (props, page) => {
  return (
    <>
      <Leaflet zoom={9} anglingFields={props.anglingFields} />
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
