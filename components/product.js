import { useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/product.module.scss'

export default function ProductPage({ title, imgs, description, children }) {
  const totalImages = imgs.length
  const [currentImage, setCurrentImage] = useState(1)
  const base = 'https://d35tzt7i3ppzs4.cloudfront.net/'

  return (
    <Layout title={title} description={description}>
      <main className={styles.product}>
        <h1>{title}</h1>
        <article className={styles.article}>
          <section id="slide-wrapper" className={styles.slideWrapper} onScroll={(event) => {
            const wrapper = document.querySelector('#slide-wrapper')
            setCurrentImage(Math.round((wrapper.scrollLeft / wrapper.getBoundingClientRect().width) + 1))
            if (wrapper.scrollLeft === 0) {
              setCurrentImage(1)
            }
          }}>
            <div id="slide" className={styles.slide}>
              {
                imgs.map((img) => {
                  return (
                    <picture key={img.src}>
                      <source srcSet={`${base}${img.src}-1306w.webp`} media='(min-width: 1367px) and (-webkit-min-device-pixel-ratio: 2)'/>
                      <source srcSet={`${base}${img.src}-653w.webp`} media='(min-width: 1367px)'/>
                      <source srcSet={`${base}${img.src}-950w.webp`} media='(min-width: 769px) and (-webkit-min-device-pixel-ratio: 2)'/>
                      <source srcSet={`${base}${img.src}-464w.webp`} media='(min-width: 769px)'/>
                      <source srcSet={`${base}${img.src}-1306w.webp`} media='(min-width: 476px)'/>
                      <source srcSet={`${base}${img.src}-950w.webp`} media='(min-width: 376px)'/>
                      <source srcSet={`${base}${img.src}-750w.webp`} media='(min-width: 321px)'/>
                      <img src={`${base}${img.src}-653w.webp`} alt={img.alt} width="400" height="300"/>
                    </picture>
                  )
                })
              }
            </div>
            <button className={styles.prevButton} onClick={() => {
              const wrapper = document.querySelector('#slide-wrapper')
              if (currentImage > 1) {
                wrapper.scrollTo({
                  top: 0,
                  left: wrapper.scrollLeft - wrapper.getBoundingClientRect().width,
                  behavior: 'smooth',
                })
                setCurrentImage(currentImage - 1)
              } else {
                wrapper.scrollTo({
                  top: 0,
                  left: window.innerWidth * totalImages,
                  behavior: 'smooth',
                })
                setCurrentImage(totalImages)
              }
            }}>
              <svg width="36" height="36">
                <g transform="matrix(-1 0 0 1 36 0)" fill="none" fillRule="evenodd">
                  <circle fillOpacity=".492" fill="#FFF" cx="18" cy="18" r="14"/>
                  <path d="M0 0h36v36H0z"/>
                  <path fill="#000" fillRule="nonzero" d="m15.03 9-2.115 2.115L19.785 18l-6.87 6.885L15.03 27l9-9z"/>
                </g>
              </svg>
            </button>
            <button className={styles.nextButton} onClick={() => {
              const slide = document.querySelector('#slide')
              const wrapper = document.querySelector('#slide-wrapper')
              if (currentImage < totalImages) {
                wrapper.scrollTo({
                  top: 0,
                  left: wrapper.scrollLeft + slide.getBoundingClientRect().width,
                  behavior: 'smooth',
                })
                setCurrentImage(currentImage + 1)
              } else {
                wrapper.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                })
                setCurrentImage(1)
              }
            }}>
              <svg width="36" height="36">
                <g fill="none" fillRule="evenodd">
                  <circle fillOpacity=".492" fill="#FFF" cx="18" cy="18" r="14"/>
                  <path d="M0 0h36v36H0z"/>
                  <path fill="#000" fillRule="nonzero" d="m15.03 9-2.115 2.115L19.785 18l-6.87 6.885L15.03 27l9-9z"/>
                </g>
              </svg>
            </button>
            <span className={styles.counter}>{currentImage}/{totalImages}</span>
          </section>
          <section className={styles.content}>
            {children}
          </section>
        </article>
      </main>
    </Layout>
  )
}