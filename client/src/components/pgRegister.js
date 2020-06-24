import React from 'react'
import {Link} from 'react-router-dom'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import {startRegisterPg} from '../actions/pgActions'
import {connect} from 'react-redux'

class PgRegister extends React.Component{
    
    render(){
        return(
            <div>
                <Formik 
                initialValues = {{
                    pgName:'',
                    email:'',
                    address:'',
                    phone:'',
                    licenseNumber:'',
                    ownerName:'',
                    password:''
                }}
                onSubmit={(values)=>{
                    console.log(values)
                    const redirect = ()=>{
                        return this.props.history.push('/pg/login')
                    }
                    this.props.dispatch(startRegisterPg(values,redirect))
                }}
                >
                    <div className='row'>
                        <div className='col-md-6 offset-3 mt-4'>
                    <Form>
                        <div className='form-group'>
                            <label>PG Name</label>
                            <Field type='text' name='pgName' className='form-control'/>
                        </div>
                        <div class="input-group mb-3">
                            <Field type="text" className="form-control" name='email' placeholder="E-mail" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">@example.com</span>
                        </div>
                        </div>
                        <div className='form-group'>
                        <label>Address</label>
                        <Field type='textarea' className='form-control' name='address'/>
                        </div>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">phone</span>
                        </div>
                            <Field type="text" className="form-control" id="basic-url" name='phone' aria-describedby="basic-addon3"/>
                        </div>
                        <div className='form-group'>
                        <label>License No.</label>
                        <Field type='text' className='form-control' name='licenseNumber'/>
                        </div>
                        <div class="input-group mb-3">
                            <Field type="text" className="form-control" name='ownerName' placeholder="Owner name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">Name</span>
                        </div>
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <Field type='text' className='form-control' name='password'/>
                        </div>
                         <button type='submit'className='btn btn-primary'>Submit</button>
                         <div class="alert alert-warning mt-1" role="alert">
                            PG ?<Link to="/pg/login" class="alert-link">already have an account?</Link>.
                        </div>
                    </Form>
                    </div>
                    </div>  
                </Formik>
            </div>
        )
    }
}
const mapStateToProps = ()=>{
    return {

    }
}
export default connect(mapStateToProps) (PgRegister)