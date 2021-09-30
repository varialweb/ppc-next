const nodemailer = require('nodemailer')
require('dotenv').config()

exports.handler = function(event, context, callback) {

    console.log('form submitted')
    console.log('EMAIL_ADDRESS:', process.env.EMAIL_ADDRESS)
    // console.log('nodemailer:', nodemailer)

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
        subject: 'Your contact request from www.precision-patios.com',
        text: 'Thank you for your contact request. Please allow up to 24 hours to receive your reply from Precision Patio Covers.'
    }

    transporter.sendMail(mailOptions1, (error, info) => {
        if (error) {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    error: error
                })
            })
            console.log('error @ send to client lead:', error)
        }
    })

    

    transporter.sendMail(mailOptions2, (error, info) => {
        if (error) {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    error: error
                })
            })
            console.log('error @ send to precisionpatios@gmail.com:', error)
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({ message: info })
            })
        }
    })

    
}