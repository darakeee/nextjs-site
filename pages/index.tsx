import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

//svg
import Java from '../public/java.svg'
import HTML from '../public/html.svg'
import CSS from '../public/css.svg'
import JS from '../public/javascript.svg'

import TS from '../public/typescript.svg'
import Rct from '../public/react.svg'
import Nextjs from '../public/nextjs.svg'

import Twi from '../public/twitter.svg'
import GH from '../public/github.svg'


export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>darakeee.dev</title>
        <meta name="description" content="index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my site!
        </h1>
        <div className={styles.profile}>
          <section className={styles.menu}>
            <h2>《Profile》</h2>
            <Link href="/history"><h3>History</h3></Link>
          </section>
          <section className={styles.detail}>
            <Image className={styles.avatar}
              src="/Me.jpg"
              width={250}
              height={250}
            />
            <h3>《Name》</h3>
            <h4>darakeee</h4>
            <p>Yuto Torii</p>
            <div className={styles.alignment}>
              <a href="https://twitter.com/darake_nai">
                <Twi/>
              </a>
              <a href="https://github.com/darakeee">
                <GH/>
              </a>
            </div>
          </section>
          <section className={styles.birthday}>
            <h3>《Birthday》</h3>
            <p>1999/11/11</p>
          </section>
          <section className={styles.skills}>
            <h3>《Skills》</h3>
            <div className={styles.svg}>
              <a><Java/></a>
              <a><HTML/></a>
              <a><CSS/></a>
              <a><JS/></a>
            </div>
          </section>
          <section className={styles.learn}>
            <h3>《Learn》</h3>
            <div className={styles.svg}>
              <a><TS/></a>
              <a><Rct/></a>
              <a><Nextjs/></a>
            </div>
          </section>
        </div> 
      </main>

      <footer className={styles.footer}>
        <p>Copyright © 2022 darakeee.</p>
      </footer>
    </div>
  )
}
