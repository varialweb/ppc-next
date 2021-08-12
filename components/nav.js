import { h } from 'preact'
import { useState } from 'preact/hooks'
import Link from 'next/link'
import styles from '../styles/nav.module.scss'

export default function Nav() {
  const [menuOpen, setDropdown] = useState(false)

  return (
    <section className={styles.navWrapper}>
      <nav className={styles.nav}>
        <button className={styles.financeButton}>Finance</button>
        <button 
          className={styles.hamburgerButton} 
          aria-label="dropdown menu"
          onClick={() => {
            setDropdown(!menuOpen)
          }}>
          <svg width="36px" height="24px" viewBox="0 0 36 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Home---Mobile" transform="translate(-258.000000, -22.000000)" fill="#000000" fillRule="nonzero">
                <g id="menu_black_48dp" transform="translate(252.000000, 10.000000)">
                  <path d="M6,36 L42,36 L42,32 L6,32 L6,36 Z M6,26 L42,26 L42,22 L6,22 L6,26 Z M6,12 L6,16 L42,16 L42,12 L6,12 Z" id="Shape"></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <section className={styles.navLinks}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/about/"><a>About</a></Link>
          <Link href="/"><a>Blog</a></Link>
          <Link href="/"><a>Contact</a></Link>
          <button>Products</button>
          <div className={styles.products}>
            <Link href="/"><a>Sunrooms</a></Link>
            <Link href="/"><a>Liferooms</a></Link>
            <Link href="/"><a>Patio Covers</a></Link>
            <Link href="/"><a>Decks</a></Link>
            <Link href="/"><a>Handrails</a></Link>
            <Link href="/"><a>Retractable Awnings</a></Link>
          </div>
        </section>
        <section className={styles.emptyNavDiv}></section>
      </nav>
      <section style={{ visibility: menuOpen ? 'visible' : 'hidden' }} className={styles.navLinksMob}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about/"><a>About</a></Link>
        <Link href="/"><a>Blog</a></Link>
        <Link href="/"><a>Contact</a></Link>
        <button>Products</button>
        <div className={styles.productsMob}>
          <Link href="/"><a>Sunrooms</a></Link>
          <Link href="/"><a>Liferooms</a></Link>
          <Link href="/"><a>Patio Covers</a></Link>
          <Link href="/"><a>Decks</a></Link>
          <Link href="/"><a>Handrails</a></Link>
          <Link href="/"><a>Retractable Awnings</a></Link>
        </div>
      </section>
    </section>
  )
}