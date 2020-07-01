import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const style = {
    height: 400
 }

 function PgProfile(props) {
     console.log(Object.keys(props.pg).length != 0 && props.pg[0].avatar)
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}  className='mt-4'style={style}  variant="outlined">
      <CardContent>
        <Typography   className={classes.title} color="textSecondary" gutterBottom>
          Profile
        </Typography>
        {Object.keys(props.pg).length != 0 ?
        <div className='col-md-3'>
        <img src={`/${props.pg[0].avatar}`} className="card-img-top" alt="..."/>
        <Typography variant="h5" component="h2">
          {props.pg[0].pgName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {props.pg[0].email}
        </Typography>
         
        <Typography variant="body2" component="p">
          Address:
          <br />
         <p>{props.pg[0].address}</p> 
        </Typography>
        <CardActions>
        <Button size="small">update Profile</Button>
      </CardActions>
        </div>:<Typography variant="h5" component="h2">
          Loading....
        </Typography>
      }
        
        
        {/* <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      
    </Card>
  );
}
const mapStateToProps = (state)=>{
    return{
        pg:state.pg
    }
}
export default connect(mapStateToProps) (PgProfile)
