const Mailgun = require('mailgun.js')
const formData = require('form-data')
const mailgun = new Mailgun(formData)

export default async function handler(req, res) {
  const DOMAIN = process.env.MG_DOMAIN
  const API_KEY = process.env.MG_API_KEY
  const mg = mailgun.client({
    username: 'api',
    key: API_KEY,
    // domain: DOMAIN,
  })
  const body = JSON.parse(req.body)
  const date = new Date().toString().split('').splice(4, 11).join('')

  let errors = false

  // console.log('body', body)

  const messageToLead = {
    from: `Precision Patio Covers <${process.env.EMAIL_ADDRESS}>`,
    to: [body.email],
    subject: 'Contact request submitted at Precision Patio Covers',
    text: `Thank you for your inquiry. Your contact request will be processed and you should receive a response within 24 hours. Have a great day!`
  }

  const messageToAdmin = {
    from: `Precision Patio Covers <${process.env.EMAIL_ADDRESS}>`,
    to: [process.env.EMAIL_SEND_TO],
    // to: ['danny@varial.dev'],
    subject: `www.precision-patios.com Contact Form Request by ${body.name} on ${date}`,
    html:
      `
      <h1>Contact Form Submission</h1>
      <h2>Contact Info</h2>
      <div>
        <p>Name: ${body.name}</p>
        <p>Email: ${body.email}</p>
        <p>City: ${body.city}</p>
        <p>Phone: ${body.number}</p>
      </div>
      <h2>Message From User:</h2>
      <div>
        <p>${body.message}</p>
      </div>`
  }

  await mg.messages.create(DOMAIN, messageToLead)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error)
      errors = true
    })

  await mg.messages.create(DOMAIN, messageToAdmin)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error)
      errors = true
    })

  if (!errors) {
    res.status(200).json({ message: 'messages sent'})
  }
}