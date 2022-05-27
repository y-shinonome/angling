import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { getDocments } from '../utils/contentful'
import type { Entry } from 'contentful'
import type { IDocumentsFields } from '../../@types/contentful'
import Meta from '../components/molecules/meta'
import Layout from '../components/template/layout'
import TitleLogo from '../components/atoms/title_logo'

type Props = {
  termsContent: Entry<IDocumentsFields>
}

const Terms: NextPage<Props> = ({ termsContent }) => {
  return (
    <>
      <Meta subTitle="利用規約" />
      <TitleLogo />
      <Layout>
        <section className="prose-custom mx-3 mt-16">
          <ReactMarkdown>{termsContent.fields.content}</ReactMarkdown>
        </section>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const termsContent = await getDocments('terms')

  return {
    props: {
      termsContent: termsContent[0],
    },
  }
}

export default Terms
