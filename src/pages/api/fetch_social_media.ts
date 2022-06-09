import type { NextApiRequest, NextApiResponse } from 'next'
import { getSocialMedia } from '../../utils/firestore'

//@ts-ignore TS6133: 'req' is declared but its value is never read.
const fetchSocialMedia = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const socialMedia = await getSocialMedia()
    res.json(socialMedia)
  } catch (error: any) {
    return res.status(500).end()
  }
}

export default fetchSocialMedia
