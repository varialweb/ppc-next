import Layout from '../components/layout'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <img
            className={styles.heroImg}
            src="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-720w.webp"
            width="720"
            height="802"
            alt="Two giant sunrooms on a mansion"
        />
        <img
            className={styles.heroImgPc}
            src="https://d35tzt7i3ppzs4.cloudfront.net/slide-img-1-1920w.webp"
            width="1920"
            height="760"
            alt="Two giant sunrooms on a mansion"
        />
      </section>
      <h1>Transform Your Outdoor Living</h1>
      <p>

      </p>
    </Layout>
  )
}
