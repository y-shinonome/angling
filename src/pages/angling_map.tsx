import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { client } from '../utils/micro_cms'
import Link from 'next/link'

type Props = {
  anglingSpots: {
    name: string
    lat: number
    lng: number
  }[]
}

const AnglingMap: NextPage<Props> = () => {
  return (
    <Link href={`/angling_spot/nhtdkm1sg`}>
      <a>若洲海浜公園海釣り施設</a>
    </Link>
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
