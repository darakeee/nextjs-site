import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

//dayjs
import dayjs from 'dayjs'

export default function History() {
  //generate today's date
  const today = dayjs();

  return (
    <div className={styles.container}>
      <Head>
        <title>darakeee.dev</title>
        <meta name="description" content="history" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is my story!
        </h1>
        <div className={styles.history}>
            <section className={styles.menu}>
                <Link href="/"><h3>Profile</h3></Link>
                <h2>《History》</h2>
            </section>
            <section className={styles.detail}>
              <ul className={styles.timeline}>
                <li>
                  <p className={styles.timelineDate}>1999/11/11</p>
                  <div className={styles.timelineContent}>
                    <p>Born in Nagoya:D</p>
                  </div>
                </li>

                <li>
                  <p className={styles.timelineDate}>2019/04</p>
                  <div className={styles.timelineContent}>
                    <p>名古屋工学院専門学校 入学</p>
                  </div>
                </li>

                <li>
                  <p className={styles.timelineDate}>2019/11</p>
                  <div className={styles.timelineContent}>
                    <p>基本情報技術者試験 合格</p>
                  </div>
                </li>

                <li>
                  <p className={styles.timelineDate}>2021/09</p>
                  <div className={styles.timelineContent}>
                    <p>HTML、CSS、JavaScript(jQuery)を使用した静的サイトの作成</p>
                  </div>
                </li>

                <li>
                  <p className={styles.timelineDate}>2022/07</p>
                  <div className={styles.timelineContent}>
                    <p>Next.js、TSX、SCSSを使用した静的サイト(当サイト)の作成</p>
                  </div>
                </li>

                <li>
                  <p className={styles.timelineDate}>{today.format('YYYY/MM/DD')}</p>
                  <div className={styles.timelineContent}>
                    <p>Now.</p>
                  </div>
                </li>
              </ul>    
            </section>
        </div> 
      </main>

      <footer className={styles.footer}>
        <p>Copyright © 2022 darakeee.</p>
      </footer>
    </div>
  )
}


