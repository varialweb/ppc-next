import Layout from '../components/layout'
import styles from '../styles/contact.module.scss'

export default function ContactPage() {
  return (
    <Layout>
      <main className={styles.contact}>
        <form onSubmit={(event) => { event.preventDefault() }}>
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