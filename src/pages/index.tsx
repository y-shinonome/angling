import type { NextPage } from 'next'
import Link from 'next/link'

const Index: NextPage = () => {
  return (
    <>
      <h1 className="text-2xl">TOPページ</h1>
      <Link href={`/angling_map`}>
        <a>釣り場を探す</a>
      </Link>
    </>
  )
}

export default Index
