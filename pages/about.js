import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/about.module.scss'

export default function AboutPage() {
  return (
    <Layout title="About Us" description="We pride ourselves on customer satisfaction by providing the best experience 
    and installing top quality products for our consumers in the Puget Sound region...">
      <main className={styles.about}>
        <h1>Our Goal</h1>
        <section className={styles.team}>
          <figure className={styles.teamFig}>
            <div className={styles.imgWrapper}>
              <div className={styles.imgShadow}/>
              <picture>
                <source
                  media="(min-width: 769px) and (-webkit-min-device-pixel-ratio: 2)"
                  srcSet="https://d35tzt7i3ppzs4.cloudfront.net/team-1358w.webp" 
                />
                <source
                  media="(min-width: 1367px)"
                  srcSet="https://d35tzt7i3ppzs4.cloudfront.net/team-868w.webp" 
                />
                <source
                  media="(min-width: 769px)"
                  srcSet="https://d35tzt7i3ppzs4.cloudfront.net/team-640w.webp" 
                />
                <source
                  media="(min-width: 435px)"
                  srcSet="https://d35tzt7i3ppzs4.cloudfront.net/team-1358w.webp" 
                />
                <source
                  media="(min-width: 376px)"
                  srcSet="https://d35tzt7i3ppzs4.cloudfront.net/team-868w.webp" 
                />
                <source
                  media="(min-width: 321px)"
                  srcSet="https://d35tzt7i3ppzs4.cloudfront.net/team-750w.webp" 
                />
                <img 
                  className={styles.teamImg}
                  src="https://d35tzt7i3ppzs4.cloudfront.net/team-640w.webp" 
                  alt="Precision Patio Covers Team Members Group Photo" 
                  width="640"
                  height="427"
                />
              </picture>
            </div>
            <figcaption>PPC Team Members</figcaption>
          </figure>
          <article className={styles.teamText}>
            <p>
              We pride ourselves on customer satisfaction by providing the best experience 
              and installing top quality products for our consumers in the Puget Sound region.
            </p>
            <p>
              We work one-on-one, go over project details, and thoroughly communicate with you to
              ensure a well thought out plan to the highest level of performance. With all that in mind, 
              you can trust that here at Precision Patio Covers, we will leave you with your dream vision 
              and a feeling of accomplishment at the end of the day.
            </p>
          </article>
        </section>
        <section className={styles.ben}>
          <figure className={styles.benFig}>
            <div className={styles.imgWrapper}>
              <div className={styles.imgShadow}/>
              <picture>
                <source
                  media="(min-width: 1921px) and (-webkit-min-device-pixel-ratio: 2)"
                  srcSet="https://d35tzt7i3ppzs4.cloudfront.net/ben-mahlia-1536w.webp" 
                />
                <source
                  media="(min-width: 1367px) and (-webkit-min-device-pixel-ratio: 2)"
                  srcSet="https://d35tzt7i3ppzs4.cloudfront.net/ben-mahlia-1200w.webp" 
                />
                <source
                  media="(min-width: 769px) and (-webkit-min-device-pixel-ratio: 2)"
                  srcSet="https://d35tzt7i3ppzs4.cloudfront.net/ben-mahlia-854w.webp" 
                />
                <source
                  media="(min-width: 769px)"
                  srcSet="https://d35tzt7i3ppzs4.cloudfront.net/ben-mahlia-640w.webp" 
                />
                <source
                  media="(min-width: 601px)"
                  srcSet="https://d35tzt7i3ppzs4.cloudfront.net/ben-mahlia-1536w.webp" 
                />
                <source
                  media="(min-width: 428px)"
                  srcSet="https://d35tzt7i3ppzs4.cloudfront.net/ben-mahlia-1200w.webp" 
                />
                <source
                  media="(min-width: 376px)"
                  srcSet="https://d35tzt7i3ppzs4.cloudfront.net/ben-mahlia-854w.webp" 
                />
                <source
                  media="(min-width: 321px)"
                  srcSet="https://d35tzt7i3ppzs4.cloudfront.net/ben-mahlia-750w.webp" 
                />
                <img
                  className={styles.benImg}
                  src="https://d35tzt7i3ppzs4.cloudfront.net/ben-mahlia-640w.webp"
                  alt=""
                  width="640"
                  height="583"
                />
              </picture>
            </div>
            <figcaption>PPC President Ben & Daughter Mahlia</figcaption>
          </figure>
          <article className={styles.benText}>
            <p>
              I’m&nbsp;
              <a href="https://www.benjaminjohn.net">Benjamin John</a>, CEO of 
              Precision Patio Covers. I’ve been in this industry for the past 
              fifteen years building&nbsp; 
              <Link href="/patio-covers/">
                <a>patio covers</a>
              </Link>,&nbsp;
              <Link href="/sunrooms/">
                <a>sunrooms</a>
              </Link>,&nbsp;
              <Link href="/decks/">
                <a>decks</a>
              </Link>,
              and most exterior home 
              improvement projects.
            </p>
            <p>
              I have seen it all and understand that a great work ethic is paramount. We implement this
              knowledge into the company and it shows tremendously, from the finished results to the very 
              happy friends and customers we have met throughout the years.
            </p>
            <p>
              <a href="tel:+13605590261">Give us a call</a> - We&apos;d love to help you with your new home improvement project.
            </p>
          </article> 
        </section>
      </main>
      
    </Layout>
  )
}