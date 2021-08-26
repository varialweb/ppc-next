import Layout from '../components/layout'
import styles from '../styles/contact.module.scss'

export default function ContactPage() {
  return (
    <Layout>
      <main className={styles.contact}>
        <form onSubmit={(event) => { event.preventDefault() }}>
          <h1>Contact Us</h1>
          <label for="name">Name:</label>
          <input type="text" name="name"/>
          <label for="phone">Phone Number:</label>
          <input type="number" name="phone"/>
          <label for="email">Email:</label>
          <input type="email" name="email"/>
          <label for="message">Message:</label>
          <textarea name="message"></textarea>
          <button>Send</button>
        </form>
      </main>
    </Layout>
  )
}