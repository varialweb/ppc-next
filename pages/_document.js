import Document, { Html, Head, Main, NextScript } from 'next/document'

// UA-155239406-1

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155239406-1" />
          <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('new google analytics test')
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-155239406-1', { page_path: window.location.pathname });
            `,
          }}
        />
        </Head>
        <body> 
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument