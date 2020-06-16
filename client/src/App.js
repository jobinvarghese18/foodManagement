import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import { BrowserRouter,Route,Link } from 'react-router-dom'
import {startLogout} from './actions/userAction'
import { Navbar,Button,Form,FormControl,NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'

class  App extends React.Component {
  handleLogout =()=>{
      this.props.dispatch(startLogout())
  }
 render(){
   console.log(this.props.user)
   return(
    <BrowserRouter>
    {
         Object.keys(this.props.user).length !==0?

         <div className='App'>
        
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Navbar.Brand href="/">Home</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Nav>
         <Link className='nav-link mr-4' to='/user/register'>PGs</Link>
         <Link className='nav-link mr-4' to='/user/register'>PGs</Link>
         <Link className='nav-link mr-4' to='/user/register'>PGs</Link>
         <Link className='nav-link mr-4' to='/user/register'>PGs</Link>
         </Nav>
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto">
           </Nav>
           <Nav>
             {/* <Link className='nav-link' to='/user/register'>Sign Up</Link> */}
             <Link className="nav-link" onClick={this.handleLogout} >Log out<span className="sr-only">(current)</span></Link>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
       </div>

    
    : <div className='App'>
        
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <Link className='nav-link' to='/user/register'>Sign Up</Link>
                <Link className="nav-link" to="/user/login">Sign In<span className="sr-only">(current)</span></Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>}
          
          <div className='container'>
            <Route path='/home' component ={Home} />
            <Route path='/user/register' component={Register}/>
            <Route path='/user/login' component={Login}/>
          </div>
          
            
          
          </BrowserRouter>
    
   )
 }
}
const mapStateToProps = (state)=>{
  return {
    user:state.user
  }
}
export default connect(mapStateToProps)(App)