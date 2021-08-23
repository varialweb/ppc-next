import Link from 'next/link'
import styles from '../styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <address>
        <p>Precision Patio Covers LLC</p>
        <p>Olympia, WA</p>
        <p><a href="tel:+13605590261">(360) 559-0261</a></p>
        <p><a href="mailto:precisionpatiocovers@gmail.com">precisionpatiocovers@gmail.com</a></p>
      </address>
      <div className={styles.footerSocialIcons}>
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
      </div>
      <div className={styles.footerProductLinks}>
        <Link href='/sunrooms/'><a>Sunrooms</a></Link>
        <Link href='/liferooms/'><a>Liferooms</a></Link>
        <Link href='/covers/'><a>Patio Covers</a></Link>
        <Link href='/decks/'><a>Decks</a></Link>
        <Link href='/screens/'><a>Power Screens</a></Link>
        <Link href='/handrails/'><a>Handrails</a></Link>
        <Link href='/awnings/'><a>Retractable Awnings</a></Link>
      </div>
      <div className={styles.footerPageLinks}>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about/'><a>About</a></Link>
        <Link href='/blog/'><a>Blog</a></Link>
        <Link href='/contact/'><a>Contact</a></Link>
        <Link href='/faq/'><a>FAQ</a></Link>
        <Link href='/privacy/'><a>Privacy Policy</a></Link>
        <Link href='/credits/'><a>Credits</a></Link>
      </div>
      <p className={styles.copyright}>&copy;2018-2021</p>
    </footer>
  )
}