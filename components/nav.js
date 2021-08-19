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

    if (window) {
      window.addEventListener('scroll', () => {
        console.log('test')

        if (document) {
          const nav = document.querySelector('#nav-wrapper')
          if (window.scrollY > 0) {
            nav.style.boxShadow = '0px 0.05rem 4px hsl(0 0% 0% / 0.5)'
          } else {
            nav.style.boxShadow = 'none'
          }
        }
      }, { passive: true})
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
          onClick={async () => {
            setDropdown(!menuOpen)
          }}>
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
        <section className={styles.socialLinks}>
          <img 
            src='https://d35tzt7i3ppzs4.cloudfront.net/facebook-icon.png' 
            alt='Facebook' 
            width='256'
            height='256'
          />
          <img 
            src='https://d35tzt7i3ppzs4.cloudfront.net/instagram-icon.png' 
            alt='Instagram' 
            width='256'
            height='256'
          />
          <img 
            src='https://d35tzt7i3ppzs4.cloudfront.net/linkedin-icon-v2.png' 
            alt='LinkedIn' 
            width='255'
            height='255'
          />
        </section>
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