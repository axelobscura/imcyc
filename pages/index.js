import Layout from './components/Layout';
import Grid from './components/grid/Grid';
import styles from '../styles/Home.module.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <Layout className={styles.inicio}>
      
      
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
        <Container>
        <Row>
          <Col>
            <Grid />
          </Col>
        </Row>
      </Container>
      </main>
    </Layout>
  )
}
