import type { NextApiRequest, NextApiResponse } from 'next'
import { setComment } from '../../utils/firestore'

const addComent = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await setComment(req.body)
    await res.unstable_revalidate(`/angling_map/${req.body.pageId}`)
    res.status(200).json({})
  } catch (error: any) {
    res.status(500).json({})
  }
}

export default addComent
