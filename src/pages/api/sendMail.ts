import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
  const msg: sgMail.MailDataRequired[] = [
    {
      to: req.body.email,
      from: {
        name: 'Langling',
        email: process.env.SENDGRID_EMAIL,
      },
      templateId: process.env.SENDGRID_TEMPLATE_ID,
      dynamicTemplateData: {
        name: req.body.name,
        subject: 'お問合せありがとうございます。',
        message: req.body.message,
      },
    },
    {
      to: process.env.SENDGRID_EMAIL,
      from: {
        name: 'Langling',
        email: process.env.SENDGRID_EMAIL,
      },
      templateId: process.env.SENDGRID_TEMPLATE_ID,
      dynamicTemplateData: {
        name: req.body.name,
        subject: 'お問合せありがとうございます。',
        message: req.body.message,
      },
    },
  ]
  try {
    await sgMail.send(msg)
    res.status(200).json({})
  } catch (error: any) {
    res.status(500).json({})
  }
}

export default sendMail
