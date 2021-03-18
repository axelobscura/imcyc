import path from 'path';

function cursoDetailPage(props){

  const { loadedCurso } = props;

  if(!loadedCurso){
    return <p>Loading...</p>
  }

  return(
    <div>
      <h1>{loadedCurso.title}</h1>
      <h2>{loadedCurso.body}</h2>
    </div>
  )
}

async function getData(){
  /*
  const fs = require('fs/promises');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  */
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return posts;
}

export async function getStaticProps(context){
  
  const { params } = context;

  const cursoId = params.cid;

  const data = await getData();

  const product = data.products.find(product => product.id === cursoId);

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${cursoId}`);
  const posts = await response.json();

  const encontrado = posts.find((posteid) => posteid.id  === cursoId)

  console.log("Aleluya: " + posts);

  if(!product){
    return { notFound: true }
  }

  return{
    props: {
      loadedCurso: response
      //loadedCurso: product
    }
  }
}

export async function getStaticPaths(){
  const data = await getData();
  const ids = data.map(product => product.id);
  const pathsWithparams = ids.map((id) => ({ params: {cid: `'${id}'`}}));

  return {
    paths: pathsWithparams,
    //fallback: 'blocking'
    fallback: false
  }
}

export default cursoDetailPage;