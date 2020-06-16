import React from 'react';
import './App.css';
import { BrowserRouter,Route,Link } from 'react-router-dom'
import { Navbar,Button,Form,FormControl,NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'

class  App extends React.Component {
 render(){
   return(
    <BrowserRouter>
     <div className='App'>
        
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Nav>
                <Nav.Link href='/user/register'>Register</Nav.Link>
                <Link className="nav-link" to="/user/login">Login <span className="sr-only">(current)</span></Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
          
          <div className='container'>
            <Route path='/user/register' component={Register}/>
            <Route path='/user/login' component={Login}/>
          </div>
          </BrowserRouter>
    
   )
 }
}
export default App