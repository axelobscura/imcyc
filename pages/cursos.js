import Layout from './components/Layout'
import content from '../frontaid.content';

import styles from '../styles/Home.module.css'

export default function Cursos(){
    return(
        <Layout>
            <main className={styles.main}>
                <div>
                <h2>{content.title}</h2>
                </div>
                {content.cursos.map((curso, i) => {
                    return(
                        <>
                            {curso.titulo}
                            {curso.fecha}
                            <div dangerouslySetInnerHTML={{ __html: curso.contenido }} />
                        </>
                    )
                })}
            </main>
        </Layout>
    )
}