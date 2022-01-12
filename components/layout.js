import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'
import Footer from './footer'
import styles from '../styles/layout.module.scss'
import Script from 'next/script'

export default function Layout({ title, description = "Patio covers, decks, sunrooms, liferooms, pergolas and more in the Great Puget Sound area.", children }) {
  return (
    <div>
      <Head>
        <title>{title} - Precision Patio Covers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <link rel="icon" href="/ppc-icon.jpg"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155239406-1" />
        <script async src="/js/analytics.js" />
      </Head>
      <Nav />
      <header className={styles.header}>
        <Link href="/">
          <a>
            <img
              className={styles.headerImage}
              src="https://d35tzt7i3ppzs4.cloudfront.net/ppc-logo-322w.webp"
              width={322}
              height={288}
              alt="Precision Patio Covers"
            />
          </a>
        </Link>
      </header>
      {children}
      <Footer />
    </div>
  )
}