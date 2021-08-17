import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/nav.module.scss'

export default function Nav() {
  const [menuOpen, setDropdown] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      if (document) {
        const nav = document.querySelector('#nav-wrapper')
        const mobNavLinks = document.querySelector('#nav-links-mob')

        mobNavLinks.style.top = nav.getBoundingClientRect().bottom + 'px'

      }
    }

    if (document) {
      const line1 = document.querySelector('.hamburgerLine1')
      const line2 = document.querySelector('.hamburgerLine2')

      if (menuOpen) {
        line1.setAttribute('y1', '1')
        line1.setAttribute('y2', '24')
        line1.setAttribute('x1', '12')
        line1.setAttribute('x2', '36')
        line2.setAttribute('y1', '24')
        line2.setAttribute('y2', '1')
        line2.setAttribute('x1', '12')
        line2.setAttribute('x2', '36')
      } 
      if (!menuOpen) {
        line1.setAttribute('y1', '8')
        line1.setAttribute('y2', '8')
        line1.setAttribute('x1', '0')
        line1.setAttribute('x2', '36')
        line2.setAttribute('y1', '20')
        line2.setAttribute('y2', '20')
        line2.setAttribute('x1', '0')
        line2.setAttribute('x2', '36')
      }
    }

    
  })

  return (
    <section className={styles.navWrapper} id='nav-wrapper'>
      <nav className={styles.nav}>
        <button className={styles.financeButton}>Finance</button>
        <button 
          className={styles.hamburgerButton} 
          aria-label="dropdown menu"
          // style={{ background: '#00f'}}
          onClick={async () => {
            setDropdown(!menuOpen)
          }}>
          {/* <svg width="36px" height="24px" viewBox="0 0 36 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Home---Mobile" transform="translate(-258.000000, -22.000000)" fill="#000000" fillRule="nonzero">
                <g id="menu_black_48dp" transform="translate(252.000000, 10.000000)">
                  <path d="M6,36 L42,36 L42,32 L6,32 L6,36 Z M6,26 L42,26 L42,22 L6,22 L6,26 Z M6,12 L6,16 L42,16 L42,12 L6,12 Z" id="Shape"></path>
                </g>
              </g>
            </g>
          </svg> */}
          <svg width="36px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Dropdown Menu</title>
            <line className='hamburgerLine1' x1="0" y1="8" x2="36" y2="8" stroke="#000" strokeWidth="2"/>
            <line className='hamburgerLine2' x1="0" y1="20" x2="36" y2="20" stroke="#000" strokeWidth="2"/>
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
      <section 
        className={styles.navLinksMob}
        id='nav-links-mob'
        style={{ visibility: menuOpen ? 'visible' : 'hidden'}} 
      >
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