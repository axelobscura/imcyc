import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import MenuPublico from './navs/menuPublico'

export default function Layout({children}){
  return(
    <div className={styles.container}>
      <Head>
        <title>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</title>
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>

      <MenuPublico />

      {children}

      <footer className={styles.footer}>
        <p>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</p>
      </footer>
    </div>
  )
}