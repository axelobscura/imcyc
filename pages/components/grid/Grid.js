import classes from './Grid.module.css';

export default function Grid(){
  return(
    <div className={classes.wrapgrid}>
      <div className={classes.griditem}>
        <h1 className="text-right pr-5">IMCYC</h1>
        <h4 className="text-right pr-5">COMPARTIR EL CONOCIMIENTO</h4>
      </div>
      <div className={classes.griditem}>
        <h3 className="text-right pr-2">Productos<br/>y Servicios</h3>
      </div>
      <div className={classes.griditem}>
        <div className={classes.test}>1</div>
        <div className={classes.test}>2</div>
        <div className={classes.test}>3</div>
      </div>
    </div>
  )
}