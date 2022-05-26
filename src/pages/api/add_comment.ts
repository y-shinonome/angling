import type { NextApiRequest, NextApiResponse } from 'next'
import { setComment } from '../../utils/firestore'
import dayjs from 'dayjs'

const addComment = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const comment = req.body

    comment.timestamp = dayjs().toDate()
    comment.ip = req.headers['x-real-ip'] || ''
    comment.vercelId = req.headers['x-vercel-id'] || ''
    comment.forwardedFor = req.headers['x-forwarded-for'] || ''
    comment.vercelIpCountry = req.headers['x-vercel-ip-country'] || ''
    comment.vercelIpCountryRegion = req.headers['x-vercel-ip-country'] || ''
    comment.vercelIpCity = req.headers['x-vercel-ip-city'] || ''

    await setComment(comment)
    return res.status(200).end()
  } catch (error: any) {
    return res.status(500).end()
  }
}

export default addComment
