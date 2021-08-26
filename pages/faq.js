import Layout from '../components/layout'
import styles from '../styles/faq.module.scss'

export default function FAQPage() {
  return (
    <Layout>
      <main className={styles.faq}>
        <h1>Frequently Asked Questions</h1>
        <ul>
          <li>
            <h2>How much does this cost?</h2>
            <p>
              Every project is different and the price is determined by the size, 
              job extent, etc.
            </p>
            <p>
              Reach out to us to speak with one of our team reps to go over your 
              project plan. They will be able to give you all the information 
              that you need.
            </p>
          </li>
          <li>
            <h2>Are permits required?</h2>
            <p>
              In most cases, yes. Depending on your location, there are some 
              details that would qualify the project as being exempt from the
              permit. We handle this for you because we are knowledgeable in 
              this process.
            </p>
          </li>
          <li>
            <h2>Do you provide financing options?</h2>
            <p>
              Yes, we provide financing and are usually at a good rate depending 
              on your credit status. Just ask us to send you the link to explore 
              your options.
            </p>
          </li>
          <li>
            <h2>What is your lead time?</h2>
            <p>
              Every job is different with the lead times and can range from 
              one to six months. We do one day jobs that may take eight to 
              sixteen weeks to obtain materials.
            </p>
            <p>
              We also do one 4 week projects that take three to six months for 
              the permit process to complete. Talk to one of our team reps to 
              ask them how long your specific project will take.
            </p>
          </li>
          <li>
            <h2>Is your company certified?</h2>
            <p>
              Yes, we are certified in all of the manufacturers products that 
              we use, are trained professionals, and build structures to 
              required codes.
            </p>
          </li>
          <li>
            <h2>Do you have a warranty for the work and product?</h2>
            <p>
              Yes, there are manufacturer warranties that vary from one product 
              to the next and we also have a ten year workmanship warranty that 
              we hold ourselves to.
            </p>
          </li>
          <li>
            <h2>Does your company work through the winter?</h2>
            <p>
              Yes, we work year round and don&apos;t stop progress.
            </p>
          </li>
        </ul>
      </main>
    </Layout>
  )
}