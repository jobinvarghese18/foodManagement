import React,{useEffect,useState} from 'react'
import {useFormik}                from 'formik'
import {connect}                  from 'react-redux'
import Paper                      from '@material-ui/core/Paper';
import { makeStyles }             from '@material-ui/core/styles';
import Countdown from 'react-countdown'
import {TextField,Button,Checkbox,
       FormControlLabel,
       FormControl,InputLabel,Select,
       MenuItem,Card,CardContent,
       Typography,Table,TableBody,
      TableContainer,TableHead,TableRow,
      TableCell}                from '@material-ui/core'
import Grid                       from '@material-ui/core/Grid';
import {startPostMessDetails,
       startGetPGMessDetails}     from '../actions/userAction'
import moment                     from 'moment'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '33ch',
        height:'4ch',
      },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));
  const dstyle = {
      minWidth:150,
      minHeight:50
  }
  const style = {
    minWidth: 283
 }
//  const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
function UserMessDetails (props){
    const classes = useStyles();
    const [count , setCount] = useState('0')
    const [date ,setDate] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'))
    useEffect(()=>{
      props.dispatch(startGetPGMessDetails())
      setCount(100)
    },[])
    const {handleSubmit, handleChange, values, errors} = useFormik({
        initialValues:{
            residentName:'',
            timing:'',
            vegNonVeg:false
        },
        onSubmit(values) {
            console.log(props.residentMess)
                  props.dispatch(startPostMessDetails(values))
         }
    })
   const update =()=>{
     setDate(moment().subtract(1, 'hours').format('MMMM Do YYYY, h:mm:ss a'))
   }
   setInterval(update,1000)
   const Completionist = () => <span>You are good to go!</span>;
    return(
        
        <div>
          <Card className={classes.root} className='mt-3' style={style}variant="outlined">
      <CardContent>

            <div className='row'>
                <div className='col-md-6 ml-3'>
                  <Typography variant='h6'>
                   Mess
                  </Typography>
                  <Typography variant='subtitle1' color='secondary'>
                    {date}
                  </Typography>
                  
                  <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Dish</TableCell>
            <TableCell align="left">Timings</TableCell>
            <TableCell align="right">VEG/Non-VEG</TableCell>
            <TableCell align="right">Served Date</TableCell>
          </TableRow>
        </TableHead>
                  {/* {
                    // console.log(props.pgMess)
                     props.pgMess.map((ele)=>{
                       return(
                         <div> 
                            <Typography variant='body1' color='primary'>
                                    {ele.dishName}
                  </Typography>
                  <Typography variant='body1' color='primary'>
                                    {ele.timeOfServing}
                  </Typography>
                 
                         </div>
                       )
                     })
                  } */}
                   <TableBody>
          {props.pgMess.map((row) => (
            <TableRow key={row.name}>
              
              <TableCell align="right">{row.dishName}</TableCell>
              <TableCell align="right">{row.timeOfServing}</TableCell>
              <TableCell align="right">{row.vegNonVeg==='veg'?'VEG':'Non-VEG'}</TableCell>
              <TableCell align="right">{row.servedDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
                </Table>
              </TableContainer>
                </div>
                <div className='col-md-4 mt-4 '> 
                
                <h3>Be there ?</h3>
                <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
               
                <TextField id="outlined-basic" name='residetName'label="Name"  name='residentName'variant="outlined"
                onChange={handleChange} size='small'/>
                
               
                 <FormControl variant="outlined" style={{minWidth: 120,maxHeight:10}} className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Timing</InputLabel>
        <Select
          name='timing'
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='breakfast'>breakfast</MenuItem>
          <MenuItem value='lunch'>lunch</MenuItem>
          <MenuItem value='dinner'>dinner</MenuItem>
        </Select>
      </FormControl>

                <FormControlLabel
                className='mt-5'
                 control={
                <Checkbox
                onChange={handleChange}
                name="vegNonVeg"
                color="primary"
          />
        }
        label="Non-VEG?"
      />
                <Button type='submit' style={style} variant="contained" color="secondary">Submit</Button>
                
                </form>
            </div>
        </div>
        
      </CardContent></Card>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        pgMess:state.pgMess
    }
}
export default connect(mapStateToProps) (UserMessDetails)