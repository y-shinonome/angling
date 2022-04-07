import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/micro_cms'

const updateTopPage = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await client.get({
    endpoint: 'angling_spots',
    queries: { limit: 1000 },
  })
  res.status(200).json(data.contents)
}

export default updateTopPage
