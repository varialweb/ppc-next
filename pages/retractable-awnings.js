import ProductPage from "../components/product";

export default function AwningsPage() {
  const imgs = [
    {
      src: 'retractable-awning-p1-1',
      alt: ''
    },
    {
      src: 'retractable-awning-p2-1',
      alt: ''
    },
    {
      src: 'retractable-awning-p3-1',
      alt: ''
    },
  ]
  return (
    <ProductPage title="Retractable Awnings" description="Retractable awnings description" imgs={imgs}>
      <p>Test</p>
    </ProductPage>
  )
}