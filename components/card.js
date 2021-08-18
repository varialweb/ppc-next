import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/card.module.scss'

export default function Card({ title, snip, img}) {
  const link = `/${title.toLowerCase()}/`
  const srcSet = [
    `https://d35tzt7i3ppzs4.cloudfront.net/${img.src}-640w.webp`, // 320px mob x 2 [0]
    `https://d35tzt7i3ppzs4.cloudfront.net/${img.src}-750w.webp`, // 375px mob x 2 [1]
    `https://d35tzt7i3ppzs4.cloudfront.net/${img.src}-888w.webp`, // 1024px tab x 2 [2]
    `https://d35tzt7i3ppzs4.cloudfront.net/${img.src}-555w.webp`, // 1280px pc x 1 [3]
    `https://d35tzt7i3ppzs4.cloudfront.net/${img.src}-1110w.webp`, // 1280px pc x 2 [4]
    `https://d35tzt7i3ppzs4.cloudfront.net/${img.src}-592w.webp`, // 1366px pc x 1 [5]
    `https://d35tzt7i3ppzs4.cloudfront.net/${img.src}-1184w.webp`, // 1366px pc x 2 [6]
    `https://d35tzt7i3ppzs4.cloudfront.net/${img.src}-693w.webp`, // 1600px pc x 1 [7]
    `https://d35tzt7i3ppzs4.cloudfront.net/${img.src}-1386w.webp`, // 1600px pc x 2 [8]
    `https://d35tzt7i3ppzs4.cloudfront.net/${img.src}-832w.webp`, // 1920px pc x 1 [9]
    `https://d35tzt7i3ppzs4.cloudfront.net/${img.src}-1664w.webp`, // 1920px pc x 2 [10]
  ]
  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper}>
        <picture>
          <source srcSet={srcSet[10]} media="(min-width: 1601px) and (-webkit-min-device-pixel-ratio: 2)"/>
          <source srcSet={srcSet[8]} media="(min-width: 1367px) and (max-width: 1600px) and (-webkit-min-device-pixel-ratio: 2)"/>
          <source srcSet={srcSet[6]} media="(min-width: 1281px) and (max-width: 1366px) and (-webkit-min-device-pixel-ratio: 2)"/>
          <source srcSet={srcSet[4]} media="(min-width: 1025px) and (max-width: 1280px) and (-webkit-min-device-pixel-ratio: 2)"/>
          <source srcSet={srcSet[2]} media="(min-width: 769px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2)"/>
          <source srcSet={srcSet[10]} media="(min-width: 376px) and (max-width: 768px) and (-webkit-min-device-pixel-ratio: 2)"/>
          <source srcSet={srcSet[8]} media="(min-width: 376px) and (max-width: 500px) and (-webkit-min-device-pixel-ratio: 2.1)"/>
          <source srcSet={srcSet[4]} media="(max-width: 375px) and (-webkit-min-device-pixel-ratio: 2.1)"/>
          <source srcSet={srcSet[10]} media="(min-width: 2561px)"/>
          <source srcSet={srcSet[4]} media="(min-width: 1921px) and (max-width: 2560px)"/>
          <source srcSet={srcSet[9]} media="(min-width: 1601px) and (max-width: 1920px)"/>
          <source srcSet={srcSet[7]} media="(min-width: 1367px) and (max-width: 1600px)"/>
          <source srcSet={srcSet[5]} media="(min-width: 1281px) and (max-width: 1366px)"/>
          <source srcSet={srcSet[3]} media="(min-width: 769px) and (max-width: 1280px)"/>
          <source srcSet={srcSet[2]} media="(min-width: 376px) and (max-width: 428px)"/>
          <source srcSet={srcSet[1]} media="(min-width: 321px) and (max-width: 375px)"/>
          <img
            src={srcSet[0]}
            alt={img.alt}
            width={640}
            height={480}
            loading='eager'
          />
        </picture>
      </div>
      <h3>{title}</h3>
      <p className={styles.snip}>{snip}</p>
      <Link href={link}>
        <button>View More</button>
      </Link>
    </article>
  )
}