import Layout from './components/Layout'
import content from '../frontaid.content';

import styles from '../styles/Home.module.css'

export default function Cursos(props){

    const { products } = props;

    return(
        <Layout>
            <main className={styles.main}>
                <div>
                <h2>{content.title}</h2>
                </div>
                <div>
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>{product.title}</li>
                        ))}
                    </ul>
                </div>
                {/* 
                {content.cursos.map((curso, i) => {
                    return(
                        <div key={i}>
                            {curso.titulo}
                            {curso.fecha}
                            <div dangerouslySetInnerHTML={{ __html: curso.contenido }} />
                        </div>
                    )
                })}
                */}
            </main>
        </Layout>
    )
}

export async function getStaticProps(){
    return {
        props: {
            products: [{ id: 'p1', title: 'Product 1'}]
        }
    }
}