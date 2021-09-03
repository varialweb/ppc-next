import Link from 'next/link'
import ProductPage from "../components/product";

export default function DecksPage() {
  const imgs = [
    {
      src: 'deck-p1-1',
      alt: ''
    },
    {
      src: 'deck-p2-1',
      alt: ''
    },
    {
      src: 'deck-p3-1',
      alt: ''
    },
    {
      src: 'deck-p4-1',
      alt: ''
    },
    {
      src: 'deck-p5-1',
      alt: ''
    },
    {
      src: 'deck-p6-1',
      alt: ''
    },
    {
      src: 'deck-p7-1',
      alt: ''
    },
    {
      src: 'deck-p8-1',
      alt: ''
    },
    {
      src: 'deck-p9-1',
      alt: ''
    },
  ]
  return (
    <ProductPage title="Decks" description="A deck is one of the best home improvements for your patio area. Turn 
    your personal space into an area that is customized to your color 
    preference and matches your home. We will take your decking plans and 
    bring them to life for you to enjoy day in and day out." imgs={imgs}>
      <p>
        A deck is one of the best home improvements for your patio area. Turn 
        your personal space into an area that is customized to your color 
        preference and matches your home. We will take your decking plans and 
        bring them to life for you to enjoy day in and day out. 
      </p>
      <h2>Deck customization options</h2>
      <ul>
        <li>
          Composite or wood decking.
        </li>
        <li>
          Custom border inlays
        </li>
        <li>
          Custom design
        </li>
        <li>
          Stairs
        </li>
        <li>
          <Link href="/handrails/">
            <a>
              Handrails
            </a>
          </Link>
        </li>
        <li>
          Lighting
        </li>
      </ul>
      <p>
        <Link href="/contact/">
          <a>
            &rarr; Start your deck project today.
          </a>
        </Link>
      </p>
    </ProductPage>
  )
}