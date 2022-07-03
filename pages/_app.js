import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#85A1BA] to-[#194591] bg-cover"><Component {...pageProps} />
  <Head>
        <title>WesterOps Todo App</title>
        <link rel="icon" href="/favicon.ico" />
  </Head>
  
  </div>
}

export default MyApp
