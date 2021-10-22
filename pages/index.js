import Layout from './components/Layout'
import styles from '../styles/Home.module.css'
import CardsSlider from './components/cardsSlider/cardsSlider'

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <h2 className={styles.entrada}>WEBINARS EN CONCRETO</h2>
        <h1 className={styles.entrada}>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h1>
        <h2 className={styles.entrada}>COMPARTIR EL CONOCIMIENTO</h2>
        <CardsSlider />
      </main>
    </Layout>
  )
}
