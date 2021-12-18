import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'
import Card from '../components/card'
import Features from '../components/features'
import styles from '../styles/home.module.scss'
import Script from 'next/script'
import { useEffect } from 'react'
import { createHash } from 'crypto'


// const bizSdk = require('facebook-nodejs-business-sdk')
// const UserData = bizSdk.UserData
// const ServerEvent = bizSdk.ServerEvent
// const EventRequest = bizSdk.EventRequest



export default function Home({ pixelId, pixelAccessToken, }) {

  useEffect(() => {
    console.log(pixelId)

    window.addEventListener('load', async (event) => {
      console.log('load')

      
      const em_hash = createHash('sha256')
      em_hash.update('')

  await fetch(`https://graph.facebook.com/v12.0/${pixelId}/events?access_token=${pixelAccessToken}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'data': [
        {
          'event_name': 'test',
          'event_time': Math.floor(new Date() / 1000),
          'action_source': 'website',
          'user_data': {
            // 'em': 'danny@varial.dev',
            'em': em_hash.digest('hex'),
          },  
        }
      ],
      'test_event_code': 'TEST89908',
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

      // await fetch(`https://graph.facebook.com/v12.0/${pixelId}/events?access_token=${pixelAccessToken}`, 
      //   {
      //     method: 'POST',
      //     body: JSON.stringify({
      //       "data": [
      //         {
      //           'event_name': 'view',
      //           'event_time': new Date().toString(),
      //         }
      //       ]
      //     })
      //   }
      // )
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error(error))
    })
  }, [])
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
              alt=""
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
        <section className={styles.cards} id="products">
          <h2 className='h2-margin-top'>Our Products</h2>
          <Card 
            title="Sunrooms"
            snip="
              A sunroom addition is a great way to maximize more space on your home. 
              It is the perfect home improvement that ties into your house seamlessly 
              in the most luxurious way."
            imgs={
              [
                {
                  src: 'sunroom-slide-1-v2',
                  alt: 'A sunroom',
                },
                {
                  src: 'sunroom-slide-2',
                  alt: 'A second sunroom'
                },
                {
                  src: 'sunroom-slide-4',
                  alt: 'A furnished sunroom surrounded by greenery'
                },
                {
                  src: 'sunroom-slide-6',
                  alt: 'A pool inside a sunroom'
                },
              ]
            }
          />
          <Card 
            title="Liferooms"
            snip="
              Life Room is a fairly new system that is exclusive to Four Seasons Sunrooms. 
              Having us as your certified installers with the Four Seasons Sunrooms family 
              provides you access to this fantastic home improvement."
            imgs={
              [
                {
                  src: 'liferoom-slide-1-v2',
                  alt: 'Inside view of a liferoom with sides closing and yellow grass field in background'
                },
                {
                  src: 'liferoom-slide-2',
                  alt: 'Night view of a liferoom with purple lighting'
                },
                {
                  src: 'liferoom-slide-3',
                  alt: 'Liferoom covered in snow with a snowman in front of it'
                },
                {
                  src: 'liferoom-slide-4',
                  alt: `Inside of liferoom in the dark with blue light and Willy Wonka and the Chocolate Factory Factory playing on a projector`
                },
              ]
            }
          />
          <Card 
            title="Patio Covers"
            snip="
              The south sound receives a lot of moisture, which limits your patio enjoyment. 
              We have the perfect solution for you."
            imgs={
              [
                {
                  src: 'patio-cover-slide-1',
                  alt: 'Small patio cover'
                },
                {
                  src: 'patio-cover-slide-2-v2',
                  alt: 'Underneath perspective of cover looking at a green yard'
                },
                {
                  src: 'patio-cover-slide-3',
                  alt: 'Free standing patio cover that is elevated'
                },
                {
                  src: 'patio-cover-slide-4',
                  alt: 'A medium-large covered patio with skylights, covered walkway, and a lush green yard'
                },
              ]
            }
          />
          <Card 
            title="Decks"
            snip="
              A deck is one of the best home improvements for your patio area. 
              Turn your space into an area that is customized to your color preference and 
              matches your home."
            imgs={
              [
                {
                  src: 'deck-slide-1-v2',
                  alt: 'Large deck with dense trees in the background'
                },
                {
                  src: 'deck-slide-2',
                  alt: 'Short but large deck with basketball on grass'
                },
                {
                  src: 'deck-slide-3',
                  alt: 'Deck with diamond shaped pattern built into it with patio furniture and a cover'
                },
                {
                  src: 'deck-slide-4',
                  alt: 'L-shaped deck with sheen from rain and body of water in the background'
                },
              ]
          }
          />
          <Card 
            title="Power Screens"
            snip="
              One way to really enhance your outdoor living and patio space is to have remote 
              controlled power screens on every side of your patio cover."
            imgs={
              [
                {
                  src: 'power-screen-slide-1',
                  alt: 'Two screens that are half closed on a small covered patio'
                },
                {
                  src: 'screen-slide-2',
                  alt: 'Two screens that are half closed on a small covered patio'
                },
                {
                  src: 'power-screen-slide-3',
                  alt: 'Two screens that are half closed on a small covered patio'
                },
                {
                  src: 'power-screen-slide-4',
                  alt: 'Two screens that are half closed on a small covered patio'
                },
              ]
            }
          />
          <Card 
            title="Handrails"
            snip="
              We install the highest quality hand railing systems available. 
              You can highly customize your design to match your desired style."
            imgs={
              [
                {
                  src: 'handrail-slide-1',
                  alt: ''
                },
                {
                  src: 'handrail-slide-2',
                  alt: ''
                },
                {
                  src: 'handrail-slide-3',
                  alt: ''
                },
                {
                  src: 'handrail-slide-4',
                  alt: ''
                },
              ]
            }
          />
          <Card 
            title="Retractable Awnings"
            snip="
              Sometimes you may not have the room to install a permanent awning or patio cover. 
              A retractable awning may be an appropriate way for you to achieve the rain protection
              and sun shade that you need, when you need it."
            imgs={
              [
                {
                  src: 'awning-slide-1-v2',
                  alt: ''
                },
                {
                  src: 'awning-slide-2',
                  alt: ''
                },
                {
                  src: 'awning-slide-3',
                  alt: ''
                },
                {
                  src: 'awning-slide-4',
                  alt: ''
                },
              ]
            }
          />
        </section>
        <Features />
        <section className={styles.badges}>
          <a href="https://www.bbb.org/us/wa/lacey/profile/sunroom-construction/precision-patio-covers-1296-1000082238/#sealclick">
            <img src="https://seal-hawaii.bbb.org/seals/blue-seal-200-42-bbb-1000082238.png" alt="Better Business Bureau" width="200" height="42"/>
          </a>
          <a href="https://www.fourseasonssunrooms.com/locations/tacoma-wa/">
            <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/four-seasons-copy-480w.webp" alt="Four Seasons Sunrooms" width="480" height="480" />
          </a>
          <a href="https://app.gethearth.com/financing/15262/19517/prequalify?utm_campaign=15262&utm_content=general&utm_medium=custom-lp&utm_source=contractor&utm_term=19517">
            <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/hearth-logo.jpg" alt="Hearth Financing" width="480" height="480"/>
          </a>
          <a href="https://business.omb.org/list/member/precision-patio-covers-99104">
            <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/omb-logo-480w.webp" alt="Olympia Master Builders" width="480" height="480"/>
          </a>
        </section>
      </main>
      {/* <Script>
          {console.log(pixelId)}
          {console.log(pixelAccessToken)}
      </Script> */}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const pixelId = process.env.PIXEL_ID
  const pixelAccessToken = process.env.PIXEL_ACCESS_TOKEN

  // console.log(context)

  // const userData = (new UserData())
  //       .setEmails(['danny@varial.dev'])
  //       .setPhones(['5642008504'])
      
  //     const serverEvent = (new ServerEvent())
  //       .setEventName('view')
  //       .setEventTime(Math.floor(new Date() / 1000))
  //       .setEventSourceUrl('https://www.precision-patios.com/')
  //       .setActionSource('website')
  //       .setTestEventCode('TEST89908')

  //     const eventsData = [serverEvent]

  //     const eventRequest = (new EventRequest(pixelAccessToken, pixelId))
  //       .setEvents(eventsData)

  //     eventRequest.execute().then(
  //       response => console.log('Response:', response),
  //       err => console.error('Error:', err)
  //     )

  

  return {
    props: {
      pixelId,
      pixelAccessToken,
    }
  }
}