import type { NextApiRequest, NextApiResponse } from 'next'
import { setComment } from '../../utils/firestore'

const addComent = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await setComment(req.body)
    await res.unstable_revalidate(`/angling_map/${req.body.pageId}`)
    return res.json({ revalidated: true })
  } catch (error: any) {
    return res.status(500).send('Error revalidating')
  }
}

export default addComent
