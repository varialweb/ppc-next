import Link from 'next/link'
import ProductPage from "../components/product"

export default function CoversPage() {
  const imgs = [
    {
      src: 'sunroom-p1-1',
      alt: ''
    },
    // {
    //   src: 'sunroom-p2-1',
    //   alt: ''
    // },
    // {
    //   src: 'sunroom-p3-1',
    //   alt: ''
    // },
    {
      src: 'sunroom-p4-1',
      alt: ''
    },
    {
      src: 'sunroom-p5-1',
      alt: ''
    },
    {
      src: 'sunroom-p6-1',
      alt: ''
    },
    {
      src: 'sunroom-p7-1',
      alt: ''
    },
    {
      src: 'sunroom-p8-1',
      alt: ''
    },
    {
      src: 'sunroom-p9-1',
      alt: ''
    },
    {
      src: 'sunroom-p10-1',
      alt: ''
    },
    {
      src: 'sunroom-p11-1',
      alt: ''
    },
    {
      src: 'sunroom-p12-1',
      alt: ''
    },
    {
      src: 'sunroom-p13-1',
      alt: ''
    },
    {
      src: 'sunroom-p14-1',
      alt: ''
    },
    {
      src: 'sunroom-p15-1',
      alt: ''
    },
    {
      src: 'sunroom-p16-1',
      alt: ''
    },
  ]
  return (
    <ProductPage title="Sunrooms" imgs={imgs} description="A sunroom addition is a great way to maximize more space on your 
    home. It is the perfect home improvement that ties into your 
    house seamlessly in the most luxurious way.">
      <p>
        A sunroom addition is a great way to maximize more space on your 
        home. It is the perfect home improvement that ties into your 
        house seamlessly in the most luxurious way.
      </p>
      <p>
        Choose from several roof design options such as, glass glazing, 
        solid roof, skylights, straight eve, cathedral, Georgian, & 
        Victorian.
      </p>
      <h2>Roof design options:</h2>
      <ul>
        <li>
          Glass glazing
        </li>
        <li>Solid roof</li>
        <li>Skylights</li>
        <li>Straight eve</li>
        <li>Cathedral</li>
        <li>Georgian</li>
        <li>Victorian</li>
      </ul>
      <h2>Door options:</h2>
      <ul>
        <li>5&apos;</li>
        <li>6&apos;</li>
        <li>7&apos;</li>
        <li>10&apos;</li>
        <li>Quad slider doors</li>
      </ul>
      <h2>Window options:</h2>
      <ul>
        <li>3&apos;</li>
        <li>4&apos;</li>
        <li>5&apos;</li>
        <li>6&apos;</li>
        <li>Sliders</li>
        <li>Dual sliders</li>
        <li>Picture windows</li>
      </ul>
      <p>
        <Link href="/contact/">
          <a>
            &rarr; Start your sunroom project today.
          </a>
        </Link>
      </p>
    </ProductPage>
  )
}
