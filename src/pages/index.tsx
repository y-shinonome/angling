import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import SWR from '../components/swr'
import { getDoc, getCllection } from '../utils/firestore'

const Index: NextPage = () => {
  return (
    <>
      <Link href={`/angling_map`}>
        <a>釣り場を探す</a>
      </Link>
      <SWR />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  getDoc()
  getCllection()
  return {
    props: {},
  }
}

export default Index
