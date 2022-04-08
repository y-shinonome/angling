import type { NextApiRequest, NextApiResponse } from 'next'
import { getAnglingSpot } from '../../utils/firestore'

const FirestoreApi = async (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await getAnglingSpot())
}

export default FirestoreApi
