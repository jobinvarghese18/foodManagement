import React from 'react'
import {connect} from 'react-redux'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import { startLoginUser } from '../actions/userAction'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import { makeStyles,ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { green, purple } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';

const schema = Yup.object().shape({
    email:Yup.string().required().email('invalid email'),
    password:Yup.string().required().min(5, 'length must be grater than 4')
    .max(10, 'length must be less than 10')

})

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
function Login(props){
    const classes = useStyles();
        return(
            <div>
                <Formik initialValues = {{
                    email:'',
                    password:''
                }}
                validationSchema = {schema}
                onSubmit = {(values)=>{
                    console.log(values)
                    const redirect  = ()=>{
                        return props.history.push('/home')
                    }
                    props.dispatch(startLoginUser(values,redirect))
                }} >
                    <Form>
                    <div className='row'>
                            <div className='col-md-4 offset-4 mt-5'>
                                <h2>Login</h2>
                                </div>
                            </div>
                        <div className='row'>
                            <div className='col-md-4 offset-4'>
                        <div className='form-group'>
                        <label htmlFor='email'>E-mail</label>
                        <Field id="filled-password-input" type='text' name='email' className='form-control' />
                        </div>
                        <ErrorMessage
                        component='div'
                        name='email'
                        />
                        <div className='form-group'>
                        <label htmlFor='password'>password</label>
                        <Field type='text' name='password'  className='form-control'/>
                        </div>
                        <ErrorMessage
                        component='div'
                        name='password'/>
                        <Button variant="contained" type='submit' color="secondary">SignIn</Button>
                        <div class="alert alert-info" role="alert">
                            PG ?<Link to="/pg/login" class="alert-link">login here</Link>.
                        </div>
                        </div>
                    </div>
                    </Form>
                </Formik>
            </div>
        )
        
}
const mapStateToPros = ()=>{
    return {

    }
}
export default connect(mapStateToPros) (Login)