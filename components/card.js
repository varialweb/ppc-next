import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/card.module.scss'

export default function Card({ title, snip, imgs}) {
  const link = `/${title.toLowerCase().replace(' ', '-')}/`

  function getAllSizes(name) {
    return [
      `https://d35tzt7i3ppzs4.cloudfront.net/${name}-640w.webp`, // 320px mob x 2 [0]
      `https://d35tzt7i3ppzs4.cloudfront.net/${name}-750w.webp`, // 375px mob x 2 [1]
      `https://d35tzt7i3ppzs4.cloudfront.net/${name}-900w.webp`, // 414px mob x 2 [2]
      `https://d35tzt7i3ppzs4.cloudfront.net/${name}-1250w.webp`, // 1280px pc x 2 [3]
      `https://d35tzt7i3ppzs4.cloudfront.net/${name}-1500w.webp`, // 1600px pc x 2 [4]
      `https://d35tzt7i3ppzs4.cloudfront.net/${name}-1750w.webp`, // 1920px pc x 2 [5]
      `https://d35tzt7i3ppzs4.cloudfront.net/${name}-2400w.webp`, // 2560px pc x 2 [6]
    ]
  }

  function PictureElement({imgArr, alt, className, loading="lazy"}) {
    const imgs = imgArr
    return (
      <picture>
        <source srcSet={imgs[6]} media="(min-width: 1921px) and (-webkit-min-device-pixel-ratio: 2)"/>
        <source srcSet={imgs[5]} media="(min-width: 1601px) and (-webkit-min-device-pixel-ratio: 2)"/>
        <source srcSet={imgs[4]} media="(min-width: 1367px) and (-webkit-min-device-pixel-ratio: 2)"/>
        <source srcSet={imgs[3]} media="(min-width: 1280px) and (-webkit-min-device-pixel-ratio: 2)"/>
        <source srcSet={imgs[5]} media="(min-width: 751px) and (-webkit-min-device-pixel-ratio: 2)"/>
        <source srcSet={imgs[4]} media="(min-width: 676px) and (-webkit-min-device-pixel-ratio: 2)"/>
        <source srcSet={imgs[3]} media="(min-width: 451px) and (-webkit-min-device-pixel-ratio: 2)"/>
        <source srcSet={imgs[5]} media="(min-width: 2561px)"/>
        <source srcSet={imgs[3]} media="(min-width: 1921px)"/>
        <source srcSet={imgs[5]} media="(min-width: 1601px)"/>
        <source srcSet={imgs[1]} media="(min-width: 1367px)"/>
        <source srcSet={imgs[0]} media="(min-width: 769px)"/>
        <source srcSet={imgs[2]} media="(min-width: 376px)"/>
        <source srcSet={imgs[1]} media="(min-width: 321px)"/>
        <img src={imgs[0]} alt={alt} width="640" height="480" className={className} loading={loading}/>
      </picture>
    )
  }

  // console.log(imgs)
  return (
    <article className={styles.card}>
      <div className={styles.imgsWrapper}>
        <div></div>
        <PictureElement imgArr={getAllSizes(imgs[0].src)} alt={imgs[0].alt} className={styles.slideImg1} loading="eager"/>
        <PictureElement imgArr={getAllSizes(imgs[1]?.src)} alt={imgs[1]?.alt} className={styles.slideImg2}/>
        <PictureElement imgArr={getAllSizes(imgs[2]?.src)} alt={imgs[2]?.alt} className={styles.slideImg3}/>
        <PictureElement imgArr={getAllSizes(imgs[3]?.src)} alt={imgs[3]?.alt} className={styles.slideImg4}/>
        <PictureElement imgArr={getAllSizes(imgs[4]?.src)} alt={imgs[4]?.alt} className={styles.slideImg5}/>
        <PictureElement imgArr={getAllSizes(imgs[5]?.src)} alt={imgs[5]?.alt} className={styles.slideImg6}/>
      </div>
      <div className={styles.contentWrapper}>
        <h3>{title}</h3>
        <p className={styles.snip}>{snip}</p>
        <Link href={link}>
          <a><button>View More</button></a>
        </Link>
      </div>
      
    </article>
  )
}