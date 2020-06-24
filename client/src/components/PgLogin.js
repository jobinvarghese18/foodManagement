import React from 'react'
import * as Yup from 'yup'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Formik,Field,ErrorMessage,Form} from 'formik'
import {startLoginPg} from '../actions/pgActions'

const schema = Yup.object().shape({
    email:Yup.string().required().email('invalid email'),
    password:Yup.string().required().min(5, 'length must be grater than 4')
    .max(10, 'length must be less than 10')

})
class PgRegister extends React.Component{

    render(){
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
                        return this.props.history.push('/home')
                    }
                    this.props.dispatch(startLoginPg(values,redirect))
                }} >
                    <Form>
                    <div className='row'>
                            <div className='col-md-4 offset-4 mt-5'>
                                <h2>PG Login</h2>
                                </div>
                            </div>
                        <div className='row'>
                            <div className='col-md-4 offset-4'>
                        <div className='form-group'>
                        <label htmlFor='email'>E-mail</label>
                        <Field type='text' name='email' className='form-control'/>
                        </div>
                        <ErrorMessage
                        component='div'
                        name='email'
                        />
                        <div className='form-group'>
                        <label htmlFor='password'>password</label>
                        <Field type='text' name='password' className='form-control'/>
                        </div>
                        <ErrorMessage
                        component='div'
                        name='password'/>
                        <button type='submit' className='btn btn-warning'>SignIn</button>
                        <div class="alert alert-warning" role="alert">
                            PG ?<Link to="/pg/register" class="alert-link">haven't registered yet? </Link>.
                        </div>
                        </div>
                    </div>
                    </Form>
                </Formik>
            </div>
        )
    }
}
const mapStateToProps = ()=>{
    return{

    }
}
export default connect(mapStateToProps) (PgRegister)