import Link from 'next/link'
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
    <ProductPage title="Power Screens" description="One way to really enhance your outdoor living and patio space is to 
    have these wonderful remote controlled power screens on every side of 
    your patio cover. These can be used and applied in many ways in 
    different locations." imgs={imgs}>
      <p>
        One way to really enhance your outdoor living and patio space is to 
        have these wonderful remote controlled power screens on every side of 
        your patio cover. These can be used and applied in many ways in 
        different locations. 
      </p>
      <p>
        Cover your windows for privacy or sun block, enclose the underside of 
        your deck, or close off any number of sides on your patio cover. There 
        are many color options, privacy screen selections, and custom lengths 
        to fit nicely in your particular spot. This is an excellent way to keep 
        the bugs and critters out of an enclosed area as well. Now you can enjoy 
        your patio without the problems of mosquitoes, flys, bees, etc.
      </p>
      <p>
        <Link href="/contact/">
          <a>
            &rarr; Start your power screen project today.
          </a>
        </Link>
      </p>
    </ProductPage>
  )
}