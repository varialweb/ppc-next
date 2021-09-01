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
    <ProductPage title="Decks" description="Decks description" imgs={imgs}>
      <p>Test</p>
    </ProductPage>
  )
}