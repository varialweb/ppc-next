import Link from "next/link";
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
    <ProductPage 
      title="Retractable Awnings" 
      description="Retractable awnings description" 
      imgs={imgs}
    >
      <p>
        Sometimes you may not have the room to install a permanent awning or
        &nbsp;<Link href="/patio-covers/">
          <a>patio cover</a>
        </Link>&nbsp;
        in your location. Having a retractable awning may be an appropriate way 
        for you to achieve the rain protection and sun shade that you need, 
        when you need it. It&apos;s a simple and convenient way to extend a 
        patio cover to your liking, all at the touch of a button. We have a 
        group of certified installers on the team that have installed many of 
        these awnings in the greater Puget Sound area.
      </p>
      <p>
        <Link href="/contact/">
          <a>
            &rarr; Start your retractable awning project today.
          </a>
        </Link>
      </p>
    </ProductPage>
  )
}