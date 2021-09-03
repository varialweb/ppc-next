import Layout from '../components/layout'
import styles from '../styles/privacy.module.scss'

export default function PrivacyPage() {
  return (
    <Layout title="Privacy Policy">
      <main className={styles.privacy}>
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy describes how your personal information is collected, 
          used, and shared when you visit or make a purchase from www.precision-patios.com (the “Site”).
        </p>
        <h2>Personal Information We Collect</h2>
        <p>
          When you visit the Site, we automatically collect certain information about your device, 
          including information about your web browser, IP address, time zone, and some of the cookies 
          that are installed on your device. Additionally, as you browse the Site, we collect information 
          about the individual web pages or products that you view, what websites or search terms referred 
          you to the Site, and information about how you interact with the Site. We refer to this 
          automatically-collected information as “Device Information.”
        </p>
        <h3>We collect Device Information using the following technologies:</h3>
        <ul>
          <li>
            “Cookies” are data files that are placed on your device or computer and often include an anonymous 
            unique identifier. For more information about cookies, and how to disable cookies, 
            visit <a href="https://www.allaboutcookies.org.">www.allaboutcookies.org</a>
          </li>
          <li>
            “Pixels” are electronic files used to record information about how you browse the Site.
          </li>
        </ul>
        <p>
          When we talk about “Personal Information” in this Privacy Policy, we are talking both about 
          Device Information and Order Information.
        </p>
        <h2>How We Use Your Personal Information</h2>
        <p>
          We use the Device Information that we collect to improve and optimize our Site (for example, 
          by generating analytics about how our customers browse and interact with the Site, and to assess 
          the success of our marketing and advertising campaigns).
        </p>
        <h2>Sharing Your Personal Information</h2>
        <p>
          We share your Personal Information with third parties to help us use your Personal Information, as described above.
          For example, we use Facebook Pixel to target ads for the Site 
          --you can read more about how Facebook uses your Personal Information here: 
          <a href="https://www.facebook.com/policy.php"> Facebook Privacy Policy</a>
        </p>
        <p>
          Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond 
          to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
        </p>
        <h2>Do Not Track</h2>
        <p>
          Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal 
          from your browser.
        </p>
        <h2>Your Rights</h2>
        <p>
          You have the right to access personal information we hold about you and to ask that your personal information be 
          corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact 
          information below. We note that we are processing your information in order to fulfill contracts we might have 
          with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business 
          interests listed above. Additionally, please note that your information may be transferred outside of the 
          jurisdiction from which you provided it to us, including to Canada and the United States.
        </p>
        <h2>Minors</h2>
        <p>
          The Site is not intended for individuals under the age of 16.
        </p>
        <h2>Changes</h2>
        <p>
          We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or 
          for other operational, legal or regulatory reasons.
        </p>
        <h2>Contact Us</h2>
        <p>
          For more information about our privacy practices, if you have questions, or if you would like to make a complaint, 
          please contact us by e-mail at or by mail using the details provided below:
        </p>
        <p><a href="mailto:precisionpatiocovers@gmail.com">precisionpatiocovers@gmail.com</a></p>
      </main>
    </Layout>
  )
}