import type { NextApiRequest, NextApiResponse } from 'next'
import { getComments } from '../../utils/firestore'

const fetchComments = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const comments = await getComments(req.query.pageId.toString())
    res.json(comments)
  } catch (error: any) {
    return res.status(500).end()
  }
}

export default fetchComments
