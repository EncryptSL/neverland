import '../styles/globals.css'
import '../styles/minecraft-icons.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="EncryptSL (ETERNITY_ROOT#PATRIK_KOLAŘÍK)" />
        <meta name="keywords" content="encryptsl, minecraft, neverlandmc" />
        <title>NeverLand CZ/SK</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
