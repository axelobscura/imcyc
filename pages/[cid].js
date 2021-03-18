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

async function getData(){
  const fs = require('fs/promises');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context){
  
  const { params } = context;

  const cursoId = params.cid;

  const data = await getData();

  const product = data.products.find(product => product.id === cursoId);

  if(!product){
    return { notFound: true }
  }

  return{
    props: {
      loadedCurso: product
    }
  }
}

export async function getStaticPaths(){
  const data = await getData();
  const ids = data.products.map(product => product.id);
  const pathsWithparams = ids.map((id) => ({ params: {cid: id}}));

  

  return {
    paths: pathsWithparams,
    //fallback: 'blocking'
    fallback: false
  }
}

export default cursoDetailPage;