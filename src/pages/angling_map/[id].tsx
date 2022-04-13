import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { getAnglingSpots, getAnglingField } from '../../utils/firestore'
import { client } from '../../utils/micro_cms'

type Props = {
  name: string
  anglingSpots: AnglingSpot[]
  anglingField: AnglingField
}

type Params = {
  id: string
}

const AnglingSpot: NextPage<Props> = ({ name, anglingSpots, anglingField }) => {
  const Leaflet = dynamic(() => import('../../components/leaflet'), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  })

  const center: Position = anglingField.position
  const zoom: number = 16

  return (
    <>
      <Leaflet
        center={center}
        zoom={zoom}
        anglingSpots={anglingSpots}
        anglingField={anglingField}
      />
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p className="mt-10">
        <Link href={`/angling_map`}>
          <a>釣り場を探す</a>
        </Link>
      </p>
      <p>
        <Link href="/">
          <a>TOP</a>
        </Link>
      </p>
    </>
  )
}

export const getStaticPaths = async () => {
  const anglingSpots = await client.get({
    endpoint: 'angling_spots',
    queries: { fields: 'id' },
  })

  const paths = anglingSpots.contents.map((content: { id: string }) => ({
    params: content,
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const anglingSpot = await client.get({
    endpoint: 'angling_spots',
    contentId: params?.id,
    queries: { fields: 'name' },
  })

  const anglingSpots = (await getAnglingSpots()).map((spot) => {
    return {
      name: spot.name,
      contentId: spot.contentId,
      position: {
        lat: spot.position.lat,
        lng: spot.position.lng,
      },
    }
  })

  const contentId = params?.id ?? ''
  const anglingField = await getAnglingField(contentId)

  return {
    props: {
      name: anglingSpot.name,
      anglingSpots: anglingSpots,
      anglingField: {
        position: anglingField[0].position,
        fieldImages: anglingField[0].fieldImages ?? null,
        restrooms: anglingField[0].restrooms ?? null,
        stores: anglingField[0].stores ?? null,
        notices: anglingField[0].notices ?? null,
      },
    },
  }
}

export default AnglingSpot
