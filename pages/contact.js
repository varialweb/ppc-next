import Layout from '../components/layout'
import styles from '../styles/contact.module.scss'
import { useState } from 'react'

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
              const message = event.target[3].value

              await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                  name: name,
                  number: number,
                  email: email,
                  message: message,
                })
              })
              .then(response => { return response.json()})
              .then(data => {
                if (data.message === 'emailsent') {
                  setSuccess(true)
                  console.log('SUCCESS:', data)
                } else {
                  console.log('DATA: ', data)
                }
                console.log('DATA:', data)
              })
              .catch(error => console.error('ERROR:', error))
            }}>
            <h1>Contact Us</h1>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" required/>
            <label htmlFor="phone">Phone Number:</label>
            <input type="number" name="phone" required/>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" required/>
            <label htmlFor="message">Message:</label>
            <textarea name="message" required></textarea>
            <button>Send</button>
          </form>
        }
      </main>
    </Layout>
  )
}