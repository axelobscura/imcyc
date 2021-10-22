import classes from './Grid.module.css';

export default function Grid(){
  return(
    <div className={classes.wrapgrid}>
      <div className={classes.griditem}>
        <h1>IMCYC</h1>
        <h4>COMPARTIR EL CONOCIMIENTO</h4>
      </div>
    </div>
  )
}