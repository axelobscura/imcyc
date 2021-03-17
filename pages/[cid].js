import path from 'path';

function cursoDetailPage(props){

  const { loadedCurso } = props;

  if(!loadedCurso){
    return <p>Loading...</p>
  }

  return(
    <div>
      <h1>{loadedCurso.title}</h1>
      <h2>{loadedCurso.description}</h2>
    </div>
  )
}

export async function getStaticProps(context){
  const fs = require('fs/promises');

  const { params } = context;

  const cursoId = params.cid;

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find(product => product.id === cursoId);

  return{
    props: {
      loadedCurso: product
    }
  }
}

export async function getStaticPaths(){
  return {
    paths: [
      { params: { cid: 'p1'} }
    ],
    //fallback: 'blocking'
    fallback: true
  }
}

export default cursoDetailPage;