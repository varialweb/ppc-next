import { useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/product.module.scss'

export default function SunroomsPage() {
  const totalImages = 3
  const [currentImage, setCurrentImage] = useState(1)
  return (
    <Layout>
      <main className={styles.product}>
        <h1>Sunrooms</h1>
        <article>
          <section className={styles.slideWrapper}>
            <div id="slide" className={styles.slide}>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p1-1-653w.webp" width="4" height="3"></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p2-1-653w.webp" width="4" height="3"></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p3-1-653w.webp" width="4" height="3"></img>
            </div>
            <button className={styles.prevButton} onClick={() => {
              const slide = document.querySelector('#slide')
              if (currentImage > 1) {
                // slide.style.transform = `translateX(${(currentImage - totalImages) * 100}vw)`
                slide.style.transform = `translateX(${-(currentImage - 2) * 100}vw)`
                setCurrentImage(currentImage - 1)
              } else {
                slide.style.transform = `translateX(-${(totalImages - 1) * 100}vw)`
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
              if (currentImage < totalImages) {
                // slide.style.boxShadow = '0px 2px 5px #00f'
                slide.style.transform = `translateX(-${currentImage * 100}vw)`
                // slide.style.transform = `translateX(-100vw)`
                setCurrentImage(currentImage + 1)
              } else {
                slide.style.transform = `translateX(0vw)`
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
            <p>
              A sunroom addition is a great way to maximize more space on your 
              home. It is the perfect home improvement that ties into your 
              house seamlessly in the most luxurious way.
            </p>
            <p>
              Choose from several roof design options such as, glass glazing, 
              solid roof, skylights, straight eve, cathedral, Georgian, & 
              Victorian.
            </p>
            <p>
              Choose from numerous door options such as 5’, 6’, 7’, & 10’ quad 
              slider doors. 
            </p>
            <p>
              Choose from many windows such as 3’, 4’, 5', 6', sliders, dual 
              sliders, & picture windows.
            </p>
          </section>
        </article>
      </main>
    </Layout>
  )
}