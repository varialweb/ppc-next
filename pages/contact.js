import Layout from '../components/layout'
import styles from '../styles/contact.module.scss'

export default function ContactPage() {
  return (
    <Layout title="Contact Us">
      <main className={styles.contact}>
        <form 
          onSubmit={ async (event) => { 
            event.preventDefault() 

            const name = event.target[0].value
            const number = event.target[1].value
            const email = event.target[2].value
            const message = event.target[3].value

            await fetch('/.netlify/functions/contact', {
              method: 'POST',
              body: JSON.stringify({
                name: name,
                number: number,
                email: email,
                message: message,
              })
            })

            console.log(name, number, email, message)
          }}>
          <h1>Contact Us</h1>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name"/>
          <label htmlFor="phone">Phone Number:</label>
          <input type="number" name="phone"/>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email"/>
          <label htmlFor="message">Message:</label>
          <textarea name="message"></textarea>
          <button>Send</button>
        </form>
      </main>
    </Layout>
  )
}