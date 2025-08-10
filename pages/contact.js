import Layout from '../components/layout'
import styles from '../styles/contact.module.scss'
import { useState } from 'react'
import ReactGA from 'react-ga'

export default function ContactPage() {
  const [success, setSuccess] = useState(false)
  return (
    <Layout title="Contact Us">
      <main className={styles.contact}>
        {
          success ?
            <div className={styles.successMessage}>Contact request successfully sent.</div>
          :
          <form 
            onSubmit={ async (event) => { 
              event.preventDefault() 

              const name = event.target[0].value
              const number = event.target[1].value
              const email = event.target[2].value
              const city = event.target[3].value
              const message = event.target[4].value

              await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                  name: name,
                  number: number,
                  email: email,
                  city: city,
                  message: message,
                })
              })
              .then(response => { return response.json()})
              .then(data => {
                
                // if (data.message === 'messages sent') {
                //   setSuccess(true)
                //   console.log('SUCCESS:', data)
                // } else {
                //   console.log('DATA: ', data)
                // }
                console.log('DATA:', data)
              })
              .catch(error => console.error('ERROR:', error))
              ReactGA('gtag_UA_155239406_1.send', 'event', 'Form', 'Submit', 'Contact Form');
              setSuccess(true)
            }}>
            <h1>Contact Us</h1>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" required/>
            <label htmlFor="phone">Phone Number:</label>
            <input type="number" name="phone" id="phone" required/>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required/>
            <label htmlFor="city">City:</label>
            <input name="city" id="city" required />
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" required></textarea>
            <button>Send</button>
          </form>
        }
      </main>
    </Layout>
  )
}