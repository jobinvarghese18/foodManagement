import React from 'react'
import * as Yup from 'yup'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'
import {Formik,Field,ErrorMessage,Form} from 'formik'
import {startLoginPg} from '../actions/pgActions'
import {useFormik} from 'formik'
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '33ch',
        height:'4ch'
      },
      root: {
          minWidth: 500
         }
    },
  }));
  const style = {
      minWidth: 283
   }
  
   const validationSchema = Yup.object().shape({
      email:Yup.string().required().email('invalid email'),
      password:Yup.string().required().min(5, 'length must be grater than 4')
      .max(10, 'length must be less than 10')
    })

function PgRegister(props){
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
          email: "",
          password: ""
        },
        validationSchema,
        onSubmit(values) {
          const redirect = ()=>{
                  return  props.history.push('/home')
                }
                props.dispatch(startLoginPg(values,redirect))
        }
      });
    const classes = useStyles();
        return(
            <div>
            <div className="row mt-5">

           </div>
            <div className="row mt-5">

            </div>
            <div className='row'>
                <div className ='col-md-4 offset-4 mt-3'>
                    <h2>PG:</h2>
                </div>
                <div className='col-md-4 offset-4'>
                   <form className={classes.root} onSubmit={handleSubmit} >
                       {/* <TextField id="standard-basic" label="E-mail" />
                       <TextField id="standard-basic" label="Password"  /> */}
                       <TextField id="outlined-basic" name='email' label="E-mail"  variant="outlined" size='small'
                       onChange= {handleChange} values={values.email} />
                       {errors.email ? errors.email : null}
                       <TextField id="outlined-basic" name='password' label="Password" values={values.password} size='small' variant="outlined"
                       onChange={handleChange} />
                       {errors.password ? errors.password : null}
                       <Button type='submit' variant="contained" style={style} color="primary" size ='large'>Login</Button>
                       <Alert severity="info" style={style}>PG ?<Link to="/pg/login" class="alert-link">login here</Link></Alert>
                   </form>
                </div>
            </div>
        </div>
        )
    
}
const mapStateToProps = ()=>{
    return{

    }
}
export default connect(mapStateToProps) (PgRegister)