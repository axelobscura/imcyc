import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import MenuPublico from './navs/menuPublico'
import Footer from './inc/Footer'

export default function Layout({children}){
  return(
    <div className={styles.container}>
      <Head>
        <title>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C. | WEBINARS EN CONCRETO</title>
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;700&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="wrapper">
        <MenuPublico />
        {children}
        <Footer />
      </div>
    </div>
  )
}