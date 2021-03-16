import classes from './Grid.module.css';

export default function Grid(){
  return(
    <div className={classes.wrapgrid}>
      <div className={classes.griditem}>1</div>
      <div className={classes.griditem}>2</div>
      <div className={classes.griditem}>3</div>
      <div className={classes.griditem}>4</div>
      <div className={classes.griditem}>5</div>
      <div className={classes.griditem}>6</div>
    </div>
  )
}