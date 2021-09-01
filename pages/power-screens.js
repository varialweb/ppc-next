import ProductPage from "../components/product";

export default function ScreensPage() {
  const imgs = [
    {
      src: 'power-screen-p1-1',
      alt: ''
    },
    {
      src: 'power-screen-p2-1',
      alt: ''
    },
    {
      src: 'power-screen-p3-1',
      alt: ''
    },
    {
      src: 'power-screen-p4-1',
      alt: ''
    },
  ]
  return (
    <ProductPage title="Power Screens" description="Power screens description" imgs={imgs}>
      <p>Test</p>
    </ProductPage>
  )
}