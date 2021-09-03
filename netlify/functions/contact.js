const nodemailer = require('nodemailer')
// require('dotenv').config()

exports.handler = function(event, context, callback) {

    console.log('form submitted')
    // console.log('EMAIL_ADDRESS:', process.env.EMAIL_ADDRESS)
    console.log('nodemailer:', nodemailer)

    const body = JSON.parse(event.body)
    const date = new Date().toString().split('').splice(4, 11).join('')

    if (body.name === 'error') {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                error: 'error'
            })
        })
    }

    let message = ''

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
        subject: 'Your contact request from www.BenjaminJohn.net',
        text: 'Thank you for your contact request. Please allow up to 24 hours business days to receive your reply from Benjamin.'
    }

    transporter.sendMail(mailOptions1, (error, info) => {
        if (error) {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    error: error
                })
            })
            console.log('error:', error)
        }
    })

    let mailOptions2 = {
        from: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_SEND_TO,
        subject: 'CONTACT REQUESTED: ' + body.name + ' at' + date,
        text: 
            `Contact requested at ${date} by ${body.name}
            Email: ${body.email}
            Phone Number: ${body.number}
            Message: ${body.message}`
    }

    transporter.sendMail(mailOptions2, (error, info) => {
        if (error) {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    error: error
                })
            })
            console.log('error:', error)
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({ message: info })
            })
        }
    })

    
}