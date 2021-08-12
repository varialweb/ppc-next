import Link from 'next/link'
import Nav from './nav'
import styles from '../styles/layout.module.scss'

export default function Layout({ children }) {
  return (
    <div>
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