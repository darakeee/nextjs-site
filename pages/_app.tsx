import '../styles/globals.scss'
import '../styles/Home.module.scss'

function MyApp({ Component, pageProps }: {Component: any ,pageProps: any}) {
  return <Component {...pageProps} />
}

export default MyApp
