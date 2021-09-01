import { useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/product.module.scss'

export default function SunroomsPage() {
  const totalImages = 16
  const [currentImage, setCurrentImage] = useState(1)
  return (
    <Layout>
      <main className={styles.product}>
        <h1>Sunrooms</h1>
        <article>
          <section id="slide-wrapper" className={styles.slideWrapper} onScroll={(event) => {
            const wrapper = document.querySelector('#slide-wrapper')
            console.log('scroll', wrapper.scrollLeft)
            if (wrapper.scrollLeft % window.innerWidth === 0) {
              console.log('match')
              setCurrentImage((wrapper.scrollLeft / window.innerWidth) + 1)
            }
            if (wrapper.scrollLeft === 0) {
              setCurrentImage(1)
            }
          }}>
            <div id="slide" className={styles.slide}>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p1-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p2-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p3-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p4-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p5-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p6-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p7-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p8-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p9-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p10-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p11-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p12-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p13-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p14-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p15-1-653w.webp" width="4" height="3" alt=""></img>
              <img src="https://precisionpatios.s3.us-west-2.amazonaws.com/sunroom-p16-1-653w.webp" width="4" height="3" alt=""></img>
            </div>
            <button className={styles.prevButton} onClick={() => {
              // const slide = document.querySelector('#slide')
              const wrapper = document.querySelector('#slide-wrapper')
              if (currentImage > 1) {
                // slide.style.transform = `translateX(${(currentImage - totalImages) * 100}vw)`
                // slide.style.transform = `translateX(${-(currentImage - 2) * 100}vw)`
                wrapper.scrollTo({
                  top: 0,
                  left: wrapper.scrollLeft - window.innerWidth,
                  behavior: 'smooth',
                })
                setCurrentImage(currentImage - 1)
              } else {
                // slide.style.transform = `translateX(-${(totalImages - 1) * 100}vw)`
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
                // console.log(window.innerWidth)
                // wrapper.scollLeft += window.innerWidth
                // wrapper.scrollTo(wrapper.scrollLeft + window.innerWidth, wrapper.scrollTop)
                wrapper.scrollTo({
                  top: 0,
                  left: wrapper.scrollLeft + window.innerWidth,
                  behavior: 'smooth',
                })
                // slide.style.transform = `translateX(-${currentImage * 100}vw)`
                setCurrentImage(currentImage + 1)
              } else {
                wrapper.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                })
                // slide.style.transform = `translateX(0vw)`
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
              Choose from numerous door options such as 5&apos;, 6&apos;, 7&apos;, & 10&apos; quad 
              slider doors. 
            </p>
            <p>
              Choose from many windows such as 3&apos;, 4&apos;, 5&apos;, 6&apos;, sliders, dual 
              sliders, & picture windows.
            </p>
          </section>
        </article>
      </main>
    </Layout>
  )
}