import Link from 'next/link'
import styles from '../styles/card.module.scss'

export default function Card({ title, snip, img}) {
  const link = `/${title.toLowerCase()}/`
  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper}>
        <div></div>
        <img 
          src={img.src}
          alt={img.alt}
          width="608"
          height="455"
          loading="lazy"
        />
      </div>
      <h3>{title}</h3>
      <p className={styles.snip}>{snip}</p>
      <Link href={link}>
        <button>View More</button>
      </Link>
    </article>
  )
}