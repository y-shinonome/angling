import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { client } from '../utils/micro_cms'
import Link from 'next/link'

type Props = {
  anglingSpots: {
    id: string
    name: string
  }[]
}

const AnglingMap: NextPage<Props> = ({ anglingSpots }) => {
  return (
    <>
      {anglingSpots.map((anglingSpot, index) => (
        <p key={index}>
          <Link href={`/angling_spot/${anglingSpot.id}`}>
            <a>{anglingSpot.name}</a>
          </Link>
        </p>
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const anglingSpots = await client.get({
    endpoint: 'angling_spots',
    queries: { limit: 1000 },
  })

  return {
    props: {
      anglingSpots: anglingSpots.contents,
    },
  }
}

export default AnglingMap
