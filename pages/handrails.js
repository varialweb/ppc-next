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
      <p>Test</p>
    </ProductPage>
  )
}