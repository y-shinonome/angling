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
  aboutContent: Entry<IDocumentsFields>
}

const About: NextPage<Props> = ({ aboutContent }) => {
  return (
    <>
      <Meta subTitle="このサイトについて" />
      <TitleLogo />
      <Layout>
        <section className="prose-custom mx-3 mt-16">
          <ReactMarkdown>{aboutContent.fields.content}</ReactMarkdown>
        </section>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const aboutContent = await getDocments('about')

  return {
    props: {
      aboutContent: aboutContent[0],
    },
  }
}

export default About
