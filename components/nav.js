import styles from '../styles/nav.module.scss'

export default function Nav() {
  return (
    <section>
      <nav className={styles.nav}>
        <button className={styles.financeButton}>Finance</button>
        <button className={styles.hamburgerButton} aria-label="dropdown menu">
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
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
          <button>Products</button>
          <div className={styles.products}>
            <a href="/">Sunrooms</a>
            <a href="/">Liferooms</a>
            <a href="/">Patio Covers</a>
            <a href="/">Decks</a>
            <a href="/">Handrails</a>
            <a href="/">Retractable Awnings</a>
          </div>
        </section>
        <section className={styles.emptyNavDiv}></section>
      </nav>
      <section className={styles.navLinksMob}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
        <button>Products</button>
        <div class="products-mobile">
          <a href="/">Sunrooms</a>
          <a href="/">Liferooms</a>
          <a href="/">Patio Covers</a>
          <a href="/">Decks</a>
          <a href="/">Handrails</a>
          <a href="/">Retractable Awnings</a>
        </div>
      </section>
    </section>
  )
}