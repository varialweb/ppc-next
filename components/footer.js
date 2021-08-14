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
        <img src='https://precisionpatios.s3.us-west-2.amazonaws.com/facebook-icon.png' alt='Facebook' />
        <img src='https://precisionpatios.s3.us-west-2.amazonaws.com/instagram-icon.png' alt='Instagram' />
        <img src='https://precisionpatios.s3.us-west-2.amazonaws.com/linkedin-icon.png' alt='LinkedIn' />
      </div>
      <div className={styles.footerProductLinks}>
        <a href='/'>Sunrooms</a>
        <a href='/'>Liferooms</a>
        <a href='/'>Patio Covers</a>
        <a href='/'>Decks</a>
        <a href='/'>Power Screens</a>
        <a href='/'>Handrails</a>
        <a href='/'>Retractable Awnings</a>
      </div>
      <div className={styles.footerPageLinks}>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Blog</a>
        <a href='/'>Contact</a>
        <a href='/'>FAQ</a>
        <a href='/'>Privacy Policy</a>
        <a href='/'>Credits</a>
      </div>
      <p className={styles.copyright}>&copy;2018-2021</p>
    </footer>
  )
}