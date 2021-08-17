import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'
import Card from '../components/card'
import Features from '../components/features'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <Layout title="Transform Your Outdoor Living">
      <Head>
        {/* <link preload="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-v4-720w.webp" as="image"/>
        <link preload="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-720w.webp" as="image"/>
        <link preload="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-720w.webp" as="image"/>
        <link preload="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-720w.webp" as="image"/> */}
      </Head>
      <section className={styles.hero}>
        <div className={styles.heroImgWrapperPc}>
          <picture>
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-pc-3200w.webp" media="(min-width: 1600px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-pc-3200w.webp" media="(min-width: 3200px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-pc-2732w.webp" media="(min-width: 1366px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-pc-2732w.webp" media="(min-width: 2732px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-pc-2560w.webp" media="(min-width: 1280px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-pc-2560w.webp" media="(min-width: 2560px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-pc-1920w.webp" media="(min-width: 1920px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-pc-1600w.webp" media="(min-width: 1600px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-pc-1600w.webp" media="(min-width: 1600px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-pc-1366w.webp" media="(min-width: 1366px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-pc-1280w.webp" media="(min-width: 1280px)" />
            <img 
              className={styles.heroImgPc}
              src="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-v4-720w.webp"
              width="360"
              height="360"
              alt=""
            />
          </picture>
          <picture>
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-pc-3840w.webp" media="(min-width: 1920px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-pc-3840w.webp" media="(min-width: 3840px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-pc-3200w.webp" media="(min-width: 1600px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-pc-3200w.webp" media="(min-width: 3200px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-pc-2732w.webp" media="(min-width: 1366px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-pc-2732w.webp" media="(min-width: 2732px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-pc-2560w.webp" media="(min-width: 1280px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-pc-2560w.webp" media="(min-width: 2560px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-pc-1920w.webp" media="(min-width: 1920px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-pc-1600w.webp" media="(min-width: 1600px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-pc-1600w.webp" media="(min-width: 1600px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-pc-1366w.webp" media="(min-width: 1366px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-pc-1280w.webp" media="(min-width: 1280px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-v5-1080w.webp" media="(-webkit-min-device-pixel-ratio: 3" />
            <img 
              className={styles.heroImgPc}
              src="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-2-v5-720w.webp"
              width="360"
              height="360"
              alt=""
            />
          </picture>
          <picture>
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-pc-3840w.webp" media="(min-width: 1920px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-pc-3840w.webp" media="(min-width: 3840px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-pc-3200w.webp" media="(min-width: 1600px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-pc-3200w.webp" media="(min-width: 3200px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-pc-2732w.webp" media="(min-width: 1366px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-pc-2732w.webp" media="(min-width: 2732px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-pc-2560w.webp" media="(min-width: 1280px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-pc-2560w.webp" media="(min-width: 2560px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-pc-1920w.webp" media="(min-width: 1920px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-pc-1600w.webp" media="(min-width: 1600px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-pc-1600w.webp" media="(min-width: 1600px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-pc-1366w.webp" media="(min-width: 1366px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-pc-1280w.webp" media="(min-width: 1280px)" />
            <img 
              className={styles.heroImgPc}
              src="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-3-v4-720w.webp"
              width="360"
              height="360"
              alt=""
            />
          </picture>
          <picture>
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-pc-3840w.webp" media="(min-width: 1920px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-pc-3840w.webp" media="(min-width: 3840px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-pc-3200w.webp" media="(min-width: 1600px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-pc-3200w.webp" media="(min-width: 3200px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-pc-2732w.webp" media="(min-width: 1366px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-pc-2732w.webp" media="(min-width: 2732px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-pc-2560w.webp" media="(min-width: 1280px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-pc-2560w.webp" media="(min-width: 2560px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-pc-1920w.webp" media="(min-width: 1920px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-pc-1600w.webp" media="(min-width: 1600px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-pc-1600w.webp" media="(min-width: 1600px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-pc-1366w.webp" media="(min-width: 1366px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-pc-1280w.webp" media="(min-width: 1280px)" />
            <img 
              className={styles.heroImgPc}
              src="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-4-v4-720w.webp"
              width="360"
              height="360"
              alt=""
            />
          </picture>
          <picture>
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-5-pc-3840w.webp" media="(min-width: 1920px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-5-pc-3840w.webp" media="(min-width: 3840px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-5-pc-3200w.webp" media="(min-width: 1600px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-5-pc-3200w.webp" media="(min-width: 3200px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-5-pc-2732w.webp" media="(min-width: 1366px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-5-pc-2732w.webp" media="(min-width: 2732px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-5-pc-2560w.webp" media="(min-width: 1280px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-5-pc-2560w.webp" media="(min-width: 2560px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-5-pc-1920w.webp" media="(min-width: 1920px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-5-pc-1600w.webp" media="(min-width: 1600px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-5-pc-1600w.webp" media="(min-width: 1600px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-5-pc-1366w.webp" media="(min-width: 1366px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-5-pc-1280w.webp" media="(min-width: 1280px)" />
            <img 
              className={styles.heroImgPc}
              src="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-5-v4-720w.webp"
              width="360"
              height="360"
              alt=""
            />
          </picture>
          <picture>
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-pc-3840w.webp" media="(min-width: 1920px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-pc-3840w.webp" media="(min-width: 3840px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-pc-3200w.webp" media="(min-width: 1600px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-pc-3200w.webp" media="(min-width: 3200px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-pc-2732w.webp" media="(min-width: 1366px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-pc-2732w.webp" media="(min-width: 2732px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-pc-2560w.webp" media="(min-width: 1280px) and (-webkit-min-device-pixel-ratio: 2)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-pc-2560w.webp" media="(min-width: 2560px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-pc-1920w.webp" media="(min-width: 1920px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-pc-1600w.webp" media="(min-width: 1600px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-pc-1600w.webp" media="(min-width: 1600px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-pc-1366w.webp" media="(min-width: 1366px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-pc-1280.webp" media="(min-width: 1280px)" />
            <source srcSet="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-1080w.webp" media="(-webkit-min-device-pixel-ratio: 3" />
            <img 
              className={styles.heroImgPc}
              src="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-6-720w.webp"
              width={"360"}
              height={"360"}
            />
          </picture>
        </div>
      </section>
      <main className={styles.main}>
        <h1>Transform <br /> Your Outdoor Living</h1>
        <p>
          Here in the Pacific Northwest, we have beautiful landscapes and stunning views.
          You should be able to enjoy your own patio area, no matter what the weather brings us.
        </p>
        <p>
          We are a home improvement company that is based in Olympia, WA.
          We serve Thurston County, Pierce County, Lewis County, Mason County, and south King County.
        </p>
        <p>
          Whether you are a homeowner or a business owner, we can help you dramatically improve your outdoor living for you or your customers.
          We are your certified Four Seasons Sunroom Dealer & Outdoor Living Specialists.
        </p>
        <section className={styles.cards}>
          <h2 className='h2-margin-top'>Our Products</h2>
          <Card 
            title="Sunrooms"
            snip="
              A sunroom addition is a great way to maximize more space on your home. 
              It is the perfect home improvement that ties into your house seamlessly 
              in the most luxurious way."
            img={{
              src: 'https://d35tzt7i3ppzs4.cloudfront.net/sunroom1-608w.webp',
              alt: ''
            }}
          />
          <Card 
            title="Liferooms"
            snip="
              Life Room is a fairly new system that is exclusive to Four Seasons Sunrooms. 
              Having us as your certified installers with the Four Seasons Sunrooms family 
              provides you access to this fantastic home improvement."
            img={{
              src: 'https://d35tzt7i3ppzs4.cloudfront.net/liferoom1-608w.webp',
              alt: ''
            }}
          />
          <Card 
            title="Patio Covers"
            snip="
              The south sound receives a lot of moisture, which limits your patio enjoyment. 
              We have the perfect solution for you."
            img={{
              src: 'https://d35tzt7i3ppzs4.cloudfront.net/cover1-608w.webp',
              alt: ''
            }}
          />
          <Card 
            title="Decks"
            snip="
              A deck is one of the best home improvements for your patio area. 
              Turn your space into an area that is customized to your color preference and 
              matches your home."
            img={{
              src: 'https://d35tzt7i3ppzs4.cloudfront.net/deck1-608w.webp',
              alt: ''
            }}
          />
          <Card 
            title="Power Screens"
            snip="
              One way to really enhance your outdoor living and patio space is to have remote 
              controlled power screens on every side of your patio cover."
            img={{
              src: 'https://d35tzt7i3ppzs4.cloudfront.net/screen-1-608w.webp',
              alt: ''
            }}
          />
          <Card 
            title="Handrails"
            snip="
              We install the highest quality hand railing systems available. 
              You can highly customize your design to match your desired style."
            img={{
              src: 'https://d35tzt7i3ppzs4.cloudfront.net/handrail-1-608w.webp',
              alt: ''
            }}
          />
          <Card 
            title="Retractable Awnings"
            snip="
              Sometimes you may not have the room to install a permanent awning or patio cover. 
              A retractable awning may be an appropriate way for you to achieve the rain protection
              and sun shade that you need, when you need it."
            img={{
              src: 'https://d35tzt7i3ppzs4.cloudfront.net/awning-1-607w.webp',
              alt: ''
            }}
          />
        </section>
        <Features />
      </main>
    </Layout>
  )
}
