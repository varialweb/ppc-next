import Link from 'next/link'
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
      <p>
        A Life Room is a fairly new system that is exclusive to&nbsp;
        <a href="https://www.fourseasonssunrooms.com/">Four Seasons Sunrooms.</a> 
        &nbsp;Having us as your certified installers with the Four Seasons 
        Sunrooms family provides you access to this fantastic home improvement. 
      </p>
      <h2>
        Customizable options include:
      </h2>
      <ul>
          <li>
            Remote controlled&nbsp; 
            <Link href="/power-screens/">
              <a>power screens</a>
            </Link>
          </li>
          <li>Glass glazing</li>
          <li>Recessed lighting</li>
          <li>Mister options</li>
          <li>LED lights</li>
        </ul>
      <p>
        <Link href="/contact/">
          <a>
            &rarr; Start your Liferoom project today.
          </a>
        </Link>
      </p>
    </ProductPage>
  )
}