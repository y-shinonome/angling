import type { NextApiRequest, NextApiResponse } from 'next'
import { setComment } from '../../utils/firestore'
import dayjs from 'dayjs'

const addComment = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const comment = req.body
    comment.timestamp = dayjs().toDate()
    comment.headers = req.headers

    await setComment(comment)
    return res.status(200).end()
  } catch (error: any) {
    return res.status(500).end()
  }
}

export default addComment
