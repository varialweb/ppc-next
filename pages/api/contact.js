const mailgun = require('mailgun-js')

export default function handler(req, res) {
  const DOMAIN = process.env.MG_DOMAIN
  const API_KEY = process.env.MG_API_KEY
  const mg = mailgun({
    apiKey: API_KEY,
    domain: DOMAIN,
  })
  const body = JSON.parse(req.body)
  const date = new Date().toString().split('').splice(4, 11).join('')

  let errors = false

  console.log('body.email:', body.email)

  const messageToLead = {
    from: `Precision Patio Covers <${process.env.EMAIL_ADDRESS}>`,
    to: body.email,
    subject: 'Contact request submitted at Precision Patio Covers',
    text: `Thank you for your inquiry. Your contact request will be processed and you should receive a response within 24 hours. Have a great day!`
  }

  const messageToAdmin = {
    from: `Precision Patio Covers <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_SEND_TO,
    subject: `www.precision-patios.com Contact Form Request by ${body.name} on ${date}`,
    text:
      `Message From User:
      ${body.message}`
  }

  mg.messages().send(messageToLead, (error, body) => {
    console.log(body)

    if (error) {
      errors = true
      res.status(500).json({ error: error })
    }
  })

  mg.messages().send(messageToAdmin, (error, body) => {
    console.log(body)

    if (error) {
      errors = true
      res.status(500).json({ error: error })
    }
  })

  if (!errors) {
    res.status(200).json({ message: 'messages sent'})
  }
}