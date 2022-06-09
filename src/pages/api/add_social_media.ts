import type { NextApiRequest, NextApiResponse } from 'next'
import { setSocialMedia } from '../../utils/firestore'
import dayjs from 'dayjs'

const addSocialMedia = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const socialMedia = req.body
    socialMedia.timestamp = dayjs().toDate()
    socialMedia.headers = req.headers

    await setSocialMedia(socialMedia)
    return res.status(200).end()
  } catch (error: any) {
    return res.status(500).end()
  }
}

export default addSocialMedia
