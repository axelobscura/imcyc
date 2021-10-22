import Link from 'next/link'
import Layout from './components/Layout'
import content from '../frontaid.content';
import path from 'path';

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
                    <ul className="tester">
                        {products.map((product) => (
                            <li key={product.id}><Link href={`/${product.id}`}>{product.title} ----</Link></li>
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

export async function getStaticProps(context){
    /*
    const fs = require('fs/promises'); // LOOK HERE
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    */
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();


    if(!posts){
        return{
            redirect: {
                destination: '/'
            }
        }
    }

    if(posts === 0){
        return{ notFound: true }
    }

    return {
        props: {
            products: posts
        },
        revalidate: 10
    }
}
