import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from './components/navbar'

export default function Document() {
    return (
        <Html lang="cs">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin='anonymous' />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
                    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" 
                        crossOrigin="anonymous" referrerPolicy="no-referrer" 
                />
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&amp;display=swap" rel="stylesheet"/>
            </Head>
            <body>
                <Navbar />
                <Main />
                <NextScript />
                <footer className="p-5 bg-dark text-white text-center position-relative">
                    <div className="container">
                        <p className="lead">Copyright &copy; {new Date().getFullYear()} NeverLand CZ/SK</p>
                        <p className="lead">This page not affiliated with Mojang or Microsoft</p>
                        <a href="#" className="position-absolute bottom-0 end-0 p-5">
                            <i className="bi bi-arrow-up-circle h1"></i>
                        </a>
                    </div>
                </footer>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha256-JRXjfu4x9e89ZZsh3MhNxupzKwaHLaUQeLW1Jt40wME=" crossOrigin='anonymous'></script>
                <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
            </body>
        </Html>
    )
}