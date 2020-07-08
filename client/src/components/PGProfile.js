import React ,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Paper,Grid,Table,TableBody,
  TableContainer,TableHead,TableRow,
  TableCell, Box}        from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import {startGetRequests} from '../actions/pgActions'

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
    height: 450
 }
//  const tablestyle = {
//   height: 150,
//   width:180
// }

 function PgProfile(props) {
     const [count ,setCount] = useState(0)
     useEffect (()=>{
      props.dispatch(startGetRequests())
      setCount(100)
     },[])
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}  className='mt-4'style={style}  variant="outlined">
      <CardContent>
      
        <Typography   className={classes.title} color="textSecondary" gutterBottom>
          Profile
        </Typography>
        {Object.keys(props.pg).length != 0 ?
        <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
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
          </Paper>
        </Grid>
        <Grid item xs={1}>

        </Grid>
        <Grid item xs={4}>
          
        
        <Box ml={20} mt={-2} mr={-30} mb={10} >
        <TableContainer component={Paper}>
      <Table className={classes.table} size='small' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">username</TableCell>
            <TableCell align="left">status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.userRequest.map((row) => (
            <TableRow key={row.userId}>
             
              <TableCell align="left">{row.username}</TableCell>
              <TableCell align="left"> <Button  variant="contained" color="primary">
                approve</Button></TableCell>
                <TableCell align="left"> <Button variant="contained" color="secondary">
                 Reject</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  
      
        </Grid>
        </Grid>
        :<Typography variant="h5" component="h2">
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
        pg:state.pg,
        userRequest:state.userRequest
    }
}
export default connect(mapStateToProps) (PgProfile)
