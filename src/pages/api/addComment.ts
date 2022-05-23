import type { NextApiRequest, NextApiResponse } from 'next'
import { setComment } from '../../utils/firestore'

const addComent = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await setComment(req.body)
    res.status(200).json({})
  } catch (error: any) {
    res.status(500).json({})
  }
}

export default addComent
