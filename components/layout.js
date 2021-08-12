import Image from 'next/image'
import Link from 'next/link'
import Nav from './nav'

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <header>
        <Link href="/">
          <Image
              className="header-image"
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