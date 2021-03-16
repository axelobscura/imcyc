import classes from './Grid.module.css';

export default function Grid(){
  return(
    <div className={classes.wrapgrid}>
      <div className={classes.griditem}>1</div>
      <div className={classes.griditem}>2</div>
      <div className={classes.griditem}>
        <div className={classes.test}>1</div>
        <div className={classes.test}>2</div>
        <div className={classes.test}>3</div>
      </div>
    </div>
  )
}