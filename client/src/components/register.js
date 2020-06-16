import React from 'react'
import {connect} from 'react-redux'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { startRegister } from '../actions/userAction'

const schema = Yup.object().shape({
    username:Yup.string().required()
})
class Register extends React.Component{
    render(){
    return(
        <div>
            <Formik 
            initialValues={{
                username:'',
                email:'',
                password:'',
                address:'',
                city:'',
                state:'',
                zip:''
            }}
            validationSchema = {schema}
            onSubmit = { (values) =>{
                this.props.dispatch(startRegister(values))
            }}
            >
                
                <Form>
                <div className='row'>
                    <div className='col-md-6 offset-3 mt-3'>
                        <h2>Register</h2>
                        
                    </div>
                </div>
                <div className='row'>
                <div className='col-md-6 offset-3 '>
                    <div className='form-group'>
                    <label htmlFor='username' className='label'>username</label>
                    <Field type='text' name='username' placeholder='username' className='form-control'/>
                    </div>
                    <ErrorMessage
                    component ='div'
                    name='username'
                    />
                    {/* <div className='form-group'>
                    <label htmlFor='email'>E-mail</label>
                    <Field type='text' name='email' className='form-control'/>
                    </div> */}
                    <div class="input-group mb-3">
  <Field type="text" class="form-control" placeholder="e-mail" 
  aria-label="Recipient's username" name='email' aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2">@example.com</span>
  </div>
</div>
                    <div className='form-group'>
                    <label  htmlFor='address'>Address</label>
                    <Field type='text' name='address' className='form-control'/>
                    </div>
                    <div class="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text" id="">City</span>
  </div>
  <Field type="text" name='city' class="form-control"/>
  <div className="input-group-prepend">
    <span className="input-group-text" id="">State</span>
  </div>
  <Field type="text" name='state' class="form-control"/>
</div>
                    {/* <div className='form-group'>
                    <label htmlFor='city'>City</label>
                    <Field type='text'  className='form-control'/>
                    </div>
                    <div className='form-group'>
                    <label htmlFor='state'>State</label>
                    <Field type='text'  className='form-control'/>
                    </div> */}
                    <div className='form-group mt-2'>
                    {/* <label htmlFor='zip'>Zip</label> */}
                    <Field type='text' name='zip' placeholder='zip' className='form-control'/>
                    </div>
                    <div className='form-group'>
                    <label htmlFor='Passsword'>Passsword</label>
                    <Field type='text' name='password' className='form-control'/>
                    </div>
                    <button type='submit' className='btn btn-primary '>Submit</button>
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
export default connect(mapStateToProps) (Register)