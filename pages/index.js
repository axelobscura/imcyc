import Layout from './components/Layout';
import Grid from './components/grid/Grid';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout className={styles.inicio}>
      <Grid />
      <main className={styles.main}>
        <div className={styles.cuadros}>
          <div>
            <h1 className={styles.entrada}>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h1>
          </div>
          <div>
            <div>
              <h2 className={styles.entrada}>COMPARTIR EL CONOCIMIENTO</h2>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
