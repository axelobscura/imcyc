import Layout from './components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout className={styles.inicio}>
      <main className={styles.main}>
        <h2 className={styles.entrada}>WEBINARS EN CONCRETO Y CEMENTO</h2>
        <h1 className={styles.entrada}>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h1>
        <h2 className={styles.entrada}>COMPARTIR EL CONOCIMIENTO</h2>
      </main>
    </Layout>
  )
}
