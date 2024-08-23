import Head from 'next/head';
import '../styles/globals.css'
import '../styles/minecraft-icons.css'
import '../styles/team.css'
import Script from 'next/script';
import { Suspense } from 'react';
import Loading from './components/ui/loading';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="EncryptSL (ETERNITY_ROOT#PATRIK_KOLAŘÍK)" />
        <meta name="keywords" content="encryptsl, minecraft, arcadiamc" />
        <title>ArcadiaMC CZ/SK</title>
      </Head>
      <Suspense fallback={<Loading />}>
        <Component {...pageProps} />
      </Suspense>
      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js' 
        integrity='sha256-JRXjfu4x9e89ZZsh3MhNxupzKwaHLaUQeLW1Jt40wME=' crossOrigin='anonymous'></Script>
      <Script src='https://unpkg.com/axios/dist/axios.min.js'></Script>
    </>
  )
}

export default MyApp
