import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'
import Footer from './footer'
import styles from '../styles/layout.module.scss'
import Script from 'next/script'
import ReactGA from 'react-ga'

export default function Layout({ title, description = "Patio covers, decks, sunrooms, liferooms, pergolas and more in the Great Puget Sound area.", children }) {
  
  return (
    <div>
      <Head>
        <title>{title} - Precision Patio Covers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <link rel="icon" href="/ppc-icon.jpg"/>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155239406-1" />
        <script async src="/js/analytics.js" /> */}
      </Head>
      <Nav />
      <header className={styles.header}>
        <Link href="/">
          <a>
            <img
              className={styles.headerImage}
              src="https://d35tzt7i3ppzs4.cloudfront.net/ppc-logo-322w.webp"
              width={322}
              height={288}
              alt="Precision Patio Covers"
            />
          </a>
        </Link>
      </header>
      {children}
      <Footer />
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-155239406-1" />
      <Script 
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-155239406-1', { page_path: window.location.pathname });
          `
        }}
      />
      <Script 
        dangerouslySetInnerHTML={{ 
          __html: `
          !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '451772699100876');
              fbq('track', 'PageView');
          `
        }} 
      />
    </div>
  )
}