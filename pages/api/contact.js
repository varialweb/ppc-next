const nodemailer = require('nodemailer')

export default async function handler(req, res) {
  const body = JSON.parse(req.body)
  const date = new Date().toString().split('').splice(4, 11).join('')

  let errors = false
  let successfulEmails = 0

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
    }
  })

  let mailOptions1 = {
    from: process.env.EMAIL_ADDRESS,
    to: body.email,
    subject: 'Your contact request from www.precision-patios.com',
    text: 'Thank you for your contact request. Please allow up to 24 hours to receive your reply from Precision Patio Covers.'
  }

  let mailOptions2 = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_SEND_TO,
    subject: 'CONTACT REQUESTED: ' + body.name + ' at ' + date,
    text: 
        `Contact requested at ${date} by ${body.name}
        Email: ${body.email}
        Phone Number: ${body.number}
        Message: ${body.message}`
  }

  transporter.sendMail(mailOptions1, (error, info) => {
    if (error) {
        res.status(500).json({error: error})
        errors = true
        console.log('error @ send to client lead:', error)
    }
    if (info) {
      successfulEmails++
      console.log('To client info:', info)
    }
  })

  transporter.sendMail(mailOptions2, (error, info) => {
    if (error) {
        res.status(500).json({error: error})
        errors = true
        console.log('error @ send to precisionpatios@gmail.com:', error)
    }
    if (info) {
      successfulEmails++
      console.log('To precisionpatios info:', info)
    }
  })



  if (!errors) {
    console.log('Emails successfully sent')
    res.status(200).json({ message: 'emailsent'})
  }
}