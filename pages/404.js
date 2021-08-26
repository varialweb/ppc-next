import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/404.module.scss'

export default function Custom404() {
  return (
    <Layout>
      <main className={styles.main}>
        <h1>Page not found</h1>
        <p>
          We&apos;re sorry, the page you were looking for seems to not exist. Please
          <Link href="/contact/"> contact us </Link> 
          if you believe there has been a mistake.
        </p>
      </main>
    </Layout>
  )
}