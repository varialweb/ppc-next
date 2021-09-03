import Link from 'next/link'
import ProductPage from "../components/product"

export default function CoversPage() {
  const imgs = [
    {
      src: 'patio-cover-p1-1',
      alt: ''
    },
    {
      src: 'patio-cover-p2-1',
      alt: ''
    },
    {
      src: 'patio-cover-p3-1',
      alt: ''
    },
    {
      src: 'patio-cover-p4-1',
      alt: ''
    },
    {
      src: 'patio-cover-p5-1',
      alt: ''
    },
    {
      src: 'patio-cover-p6-1',
      alt: ''
    },
    {
      src: 'patio-cover-p7-1',
      alt: ''
    },
    {
      src: 'patio-cover-p8-1',
      alt: ''
    },
    {
      src: 'patio-cover-p9-1',
      alt: ''
    },
    {
      src: 'patio-cover-p10-1',
      alt: ''
    },
    {
      src: 'patio-cover-p11-1',
      alt: ''
    },
    {
      src: 'patio-cover-p12-1',
      alt: ''
    },
    {
      src: 'patio-cover-p13-1',
      alt: ''
    },
    {
      src: 'patio-cover-p14-1',
      alt: ''
    },
    {
      src: 'patio-cover-p15-1',
      alt: ''
    },
    {
      src: 'patio-cover-p16-1',
      alt: ''
    },
    {
      src: 'patio-cover-p17-1',
      alt: ''
    },
  ]
  return (
    <ProductPage title="Patio Covers" imgs={imgs} description="The South Sound receives a lot of moisture, which limits your patio enjoyment. We have the perfect solution for you.">
      <p>
        As many of you already know, we get more rain than sun here in the 
        Pacific Northwest. The South Sound receives a lot of moisture, which 
        limits your patio enjoyment. We have the perfect solution for you.
      </p>
      <h2>
        Configurable Options
      </h2>
      <ul>
        <li>
          Wrap Kit Color (10 available)
        </li>
        <li>
          Free standing cover or 3 other attachments
        </li>
      </ul>
      <p>
        President&nbsp;
        <a href="https://benjaminjohn.net">Benjamin John</a> has installed over 
        2,000 of these systems in the Puget Sound area over a fifteen year 
        period in every style that you can possibly imagine. Some of the 
        counties we have services are - Thurston, Pierce, Lewis, Mason, & King 
        County.
      </p>
      <p>
        <Link href="/contact/">
          <a>
            &rarr; Start your patio cover project today.
          </a>
        </Link>
      </p>
    </ProductPage>
  )
}