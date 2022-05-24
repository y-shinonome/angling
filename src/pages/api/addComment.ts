import type { NextApiRequest, NextApiResponse } from 'next'
import { setComment } from '../../utils/firestore'

const addComent = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await setComment(req.body)
    return res.status(200)
  } catch (error: any) {
    return res.status(500)
  }
}

export default addComent
