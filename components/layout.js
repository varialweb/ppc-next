import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'
import styles from '../styles/layout.module.scss'

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title} - Precision Patio Covers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Patio covers, decks, sunrooms, liferooms, pergolas and more in the Great Puget Sound area." />
      </Head>
      <Nav />
      <header className={styles.header}>
        <Link href="/">
          <img
              className={styles.headerImage}
              src="https://d35tzt7i3ppzs4.cloudfront.net/ppc-logo-322w.webp"
              width={322}
              height={288}
              alt="Precision Patio Covers"
          />
        </Link>
      </header>
      {children}
      <footer>Footer</footer>
    </div>
  )
}