import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/nav.module.scss'

export default function Nav() {
  const [menuOpen, setDropdown] = useState(false)
  const [productsOpen, setProducts] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      if (document) {
        const nav = document.querySelector('#nav-wrapper')
        const mobNavLinks = document.querySelector('#nav-links-mob')
        const navLinks = document.querySelector('#nav-links-pc')
        const productLinksPc = document.querySelector('#products-pc')
        const productsButtonPc = document.querySelector('#products-button-pc')
        const productLinksMob = document.querySelector('#products-mob')

        // productLinksMob.style.visibility = 'visible'

        mobNavLinks.style.top = nav.getBoundingClientRect().bottom + 'px'
        productLinksPc.style.top = nav.getBoundingClientRect().bottom + 'px'
        // productLinksPc.style.right = (navLinks.getBoundingClientRect().width - productLinksPc.width)+ 'px'
        productLinksPc.style.transform = 'translateX(' + (navLinks.getBoundingClientRect().width - productLinksPc.getBoundingClientRect().width) + 'px)'
        // productLinksPc.style.right = '800px'
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
        <div className={styles.financingSection}>
        {/* <button className={styles.financeButton}>Finance</button> */}
        <a href="https://app.gethearth.com/financing/15262/19517/prequalify?utm_campaign=15262&utm_content=general&utm_medium=custom-lp&utm_source=contractor&utm_term=19517" className={styles.finance}>Finance</a>
        </div>
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
        <section id="nav-links-pc" className={styles.navLinks}>
          <div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about/"><a>About</a></Link>
            <Link href="/blog/"><a>Blog</a></Link>
            <Link href="/contact/"><a>Contact</a></Link>
            {/* <Link href="/#products"><a>Products</a></Link> */}
            <button
              id="products-button-pc"
              aria-label="dropdown menu"
              onClick={async () => {
                setDropdown(!menuOpen)
              }}
            >
              Products
            </button>
            <div id="products-pc" className={styles.productsPc} style={{ visibility: menuOpen ? 'visible' : 'hidden' }}>
              <Link href="/sunrooms/"><a>Sunrooms</a></Link>
              <Link href="/liferooms/"><a>Liferooms</a></Link>
              <Link href="/patio-covers/"><a>Patio Covers</a></Link>
              <Link href="/decks/"><a>Decks</a></Link>
              <Link href="/power-screens/"><a>Power Screens</a></Link>
              <Link href="/handrails/"><a>Handrails</a></Link>
              <Link href="/retractable-awnings/"><a>Retractable Awnings</a></Link>
            </div>
            
          </div>
          {/* <button>Products</button> */}
          {/* <div className={styles.products}>
            <Link href="/"><a>Sunrooms</a></Link>
            <Link href="/"><a>Liferooms</a></Link>
            <Link href="/"><a>Patio Covers</a></Link>
            <Link href="/"><a>Decks</a></Link>
            <Link href="/"><a>Handrails</a></Link>
            <Link href="/"><a>Retractable Awnings</a></Link>
          </div> */}
        </section>
        <section className={styles.socialLinks}>
          <a href="https://www.facebook.com/PrecisionPatioCoversLLC/">
            <img 
              src='https://d35tzt7i3ppzs4.cloudfront.net/facebook-icon.png' 
              alt='Facebook' 
              width='256'
              height='256'
            />
          </a>
          <a href="https://www.instagram.com/precision_patio_covers/">
            <img 
              src='https://d35tzt7i3ppzs4.cloudfront.net/instagram-icon.png' 
              alt='Instagram' 
              width='256'
              height='256'
            />
          </a>
          <a href="https://www.linkedin.com/in/precision-patio-covers-054a77183/">
            <img 
              src='https://d35tzt7i3ppzs4.cloudfront.net/linkedin-icon-v2.png' 
              alt='LinkedIn' 
              width='255'
              height='255'
            />
          </a>
          <a href="https://www.youtube.com/channel/UCOiOApFKEXvDPaRBn5sUpAQ">
            <img 
              src="https://precisionpatios.s3.us-west-2.amazonaws.com/youtube_social_circle_red.png"
              alt="Youtube"
              width="255"
              height="255"
            />
          </a>
        </section>
      </nav>
      <section 
        className={styles.navLinksMob}
        id='nav-links-mob'
        style={{ visibility: menuOpen ? 'visible' : 'hidden' }}
      >
        <Link href="/"><a>Home</a></Link>
        <Link href="/about/"><a>About</a></Link>
        <Link href="/blog/"><a>Blog</a></Link>
        <Link href="/contact/"><a>Contact</a></Link>
        <button onClick={() => {
          // setDropdown(!menuOpen)
          setProducts(!productsOpen)
        }} >Products</button>
        <div id="products-mob" className={styles.productsMob} style={{ visibility: productsOpen ? 'visible' : 'hidden', height: productsOpen ? 'fit-content' : '0'}}>
          <Link href="/sunrooms/"><a>Sunrooms</a></Link>
          <Link href="/liferooms/"><a>Liferooms</a></Link>
          <Link href="/patio-covers/"><a>Patio Covers</a></Link>
          <Link href="/decks/"><a>Decks</a></Link>
          <Link href="/power-screens/"><a>Power Screens</a></Link>
          <Link href="/handrails/"><a>Handrails</a></Link>
          <Link href="/retractable-awnings/"><a>Retractable Awnings</a></Link>
        </div>
      </section>
    </section>
  )
}