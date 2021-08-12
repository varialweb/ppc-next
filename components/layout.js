import Nav from './nav'

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <header>
        <a href="/">
        <img 
            className="header-image"
            src="https://d35tzt7i3ppzs4.cloudfront.net/ppc-logo-322w.webp"
            width="322"
            height="288"
            alt="Precision Patio Covers"
        />
        </a>
      </header>
      {children}
      <footer>Footer</footer>
    </div>
  )
}