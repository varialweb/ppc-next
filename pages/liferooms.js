import ProductPage from '../components/product'

export default function LiferoomsPage() {
  const imgs = [
    {
      src: 'liferoom-p1-1',
      alt: '',
    },
    {
      src: 'liferoom-p2-1',
      alt: '',
    },
    {
      src: 'liferoom-p3-1',
      alt: '',
    },
    {
      src: 'liferoom-p4-1',
      alt: '',
    },
    {
      src: 'liferoom-p5-1',
      alt: '',
    },
  ]

  return (
    <ProductPage 
      title="Liferooms" 
      description="Liferooms description"
      imgs={imgs}
    >
      <p>Test</p>
      <p>Test 2</p>
    </ProductPage>
  )
}