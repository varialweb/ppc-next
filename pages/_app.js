import { useRouter } from 'next/router'
import { useEffect } from 'react';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const handleRouteChange = (url) => {
    console.log('router change:', url)
    window.gtag('config', 'UA-155239406-1', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events])


  return <Component {...pageProps} />
}

export default MyApp
