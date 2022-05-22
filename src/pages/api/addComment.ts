import type { NextApiRequest, NextApiResponse } from 'next'
import { addDoc } from '../../utils/firestore'

const addComment = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await addDoc(req.body.pageId, req.body.name, req.body.comment)
    res.status(200).json({})
  } catch (error: any) {
    res.status(500).json({})
  }
}

export default addComment
