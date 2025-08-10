import { MailtrapClient } from "mailtrap"

export default async function handler(req, res) {
  const TOKEN = process.env.MT_TOKEN
  
  const client = new MailtrapClient({ token: TOKEN })
  const body = JSON.parse(req.body)
  const date = new Date().toString().split('').splice(4, 11).join('')

  const messageToLead = {
    from: { name: "Precision Patio Covers", email: "noreply@precision-patios.com" },
    to: [{ email: body.email }],
    subject: "Contact request submitted at Precision Patio Covers",
    text: "Thank you for your inquiry. Your contact request will be processed and you should receive a response within 24 hours. Have a great day!",
  }

  const messageToAdmin = {
    from: { name: "Precision Patio Covers", email: "noreply@precision-patios.com" },
    to: [process.env.EMAIL_SEND_TO],
    subject: `www.precision-patios.com Contact Form Request by ${body.name} on ${date}`,
    text:
      `
      Contact Form Submission\n\n
      Contact Info\n
        Name: ${body.name}\n
        Email: ${body.email}\n
        City: ${body.city}\n
        Phone: ${body.number}\n
      \n
      Message From User:\n
        ${body.message}\n`
  }

  client.send(messageToLead).then(console.log).catch(console.error)
  client.send(messageToAdmin).then(console.log).catch(console.error)
}