import Link from 'next/link'
import ProductPage from "../components/product";

export default function HandrailsPage() {
  const imgs = [
    {
      src: 'handrail-p1-1',
      alt: ''
    },
    {
      src: 'handrail-p2-1',
      alt: ''
    },
    {
      src: 'handrail-p1-2',
      alt: ''
    },
    {
      src: 'handrail-p3-1',
      alt: ''
    },
    {
      src: 'handrail-p4-1',
      alt: ''
    },
  ]
  return (
    <ProductPage title="Handrails" description="Handrails description" imgs={imgs}>
      <p>
        We install the highest quality hand railing systems available. This is 
        a great way to add a border to your decking project or concrete slab. 
        You can highly customize your design to match your desired style. 
        Custom gates can be added for access into and out of the area.
      </p>
      <h2>Railing types:</h2>
      <ul>
        <li>Cable</li>
        <li>Glass</li>
        <li>Picket</li>
        <li>Wood</li>
        <li>Composite</li>
      </ul>
      <h2>Benefits of adding a handrail:</h2>
      <ul>
        <li>Contain pets</li>
        <li>Protect children</li>
        <li>Ensure ledge protection</li>
        <li>Increase property value</li>
      </ul>
      <p>
        <Link href="/contact/">
          <a>
            &rarr; Start your handrail project today.
          </a>
        </Link>
      </p>
    </ProductPage>
  )
}