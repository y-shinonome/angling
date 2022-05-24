import type { NextApiRequest, NextApiResponse } from 'next'
import { setComment } from '../../utils/firestore'

const addComment = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await setComment(req.body)
    return res.status(200).end()
  } catch (error: any) {
    return res.status(500).end()
  }
}

export default addComment
