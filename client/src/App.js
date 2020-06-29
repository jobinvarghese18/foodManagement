import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import { BrowserRouter,Route,Link } from 'react-router-dom'
import {startLogout} from './actions/userAction'
import { Navbar,Button,Form,FormControl,NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import Home from './components/home'
import Login from './components/login'
import logo from './logo/waste2.png'
import Register from './components/register'
import PgRegister from './components/pgRegister'
import PgLogin from './components/PgLogin'
import PGsCards from './components/PGsCards'
import PgCards from './components/PGsCards';
import Login1 from './components/login1'

class  App extends React.Component {
  handleLogout =()=>{
      this.props.dispatch(startLogout())
  }
 render(){
   console.log('user',this.props.user)
   console.log('pg',this.props.pg)
   return(
    <BrowserRouter>
    {/* ---------------Users Nav bar-------------- */}
    {
         Object.keys(this.props.user).length !==0 &&
       
         <div className='App'>
         
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Navbar.Brand href="/">  <img src={logo} width="50" height="50"/></Navbar.Brand>
         <Navbar.Brand href="/">Home</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Nav>
         <Link className='nav-link mr-4' to='/user/pgcards'>PGs</Link>
         <Link className='nav-link mr-4' to=''>Mess</Link>
         <Link className='nav-link mr-4' to=''>Notification</Link>
         <Link className='nav-link mr-4' to=''>Feedback</Link>
         </Nav>
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto">
           </Nav>
           <Nav>
             <Link className="nav-link" onClick={this.handleLogout} >Log out<span className="sr-only">(current)</span></Link>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
       </div>
         }
         {
           Object.keys(this.props.pg).length === 0 && Object.keys(this.props.user).length === 0 && 
           <div className='App'>
        
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">  <img src={logo} width="50" height="50"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <Link className='nav-link' to='/user/login'>Login</Link>
                <Link className="nav-link" to="/user/register">Join<span className="sr-only">(current)</span></Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
         }
          {
            Object.keys(this.props.pg).length !==0 &&
            <div className='App'>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Navbar.Brand href="/">  <img src={logo} width="50" height="50"/></Navbar.Brand>
         <Navbar.Brand href="/">Home</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Nav>
         <Link className='nav-link mr-4' to=''>Profile</Link>
         <Link className='nav-link mr-4' to=''>Mess</Link>
         <Link className='nav-link mr-4' to=''>Notification</Link>
         <Link className='nav-link mr-4' to=''>Feedback</Link>
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
            
          }
          
          <div className='container'>
            <Route path='/home' component ={Home} />
            <Route path='/user/register' component={Register}/>
            <Route path='/user/login' component={Login1}/>
            <Route path='/user/pgcards' component = {PgCards}/>
            <Route path='/user/login1' component = {Login1} />


            <Route path='/pg/register' component={PgRegister} />
            <Route path='/pg/login' component={PgLogin}/>
          </div>
          
            
          
          </BrowserRouter>
    
   )
 }
}
const mapStateToProps = (state)=>{
  return {
    user:state.user,
    pg:state.pg

  }
}
export default connect(mapStateToProps)(App)