import type { NextPage } from 'next'
import Link from 'next/link'
import SWR from '../components/swr'

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

export default Index
