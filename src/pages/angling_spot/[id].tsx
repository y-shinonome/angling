import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { client } from '../../utils/micro_cms'

type Props = {
  name: string
}

type Params = {
  id: string
}

const AnglingSpot: NextPage<Props> = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
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

  return {
    props: {
      name: anglingSpot.name,
    },
  }
}

export default AnglingSpot
