import React from 'react'
import { Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
// import './NavBar.css';
import '../../App.css'
import { TbWorld } from "react-icons/tb";
import logo from "../../zapierLogo (2).png";

const NavBar = () => {
  return (
    <div>
       <Navbar  expand="lg" className='navContainer navbar'>
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <img src={logo} width="100" height="60" alt="Logo" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className='nav-div'>
        <Nav className="mr-auto d-flex mx-3">
          <NavDropdown className='mx-1' title="Product" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className='mx-1' title="Solutins" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className='mx-1' title="Resources" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className='mx-1' href="#home">Enterprice</Nav.Link>
          <Nav.Link className='mx-1' href="#link">Price</Nav.Link>
        </Nav>
        <Nav className="ml-auto ">
        <Nav className='mx-3'>
        <Nav.Link className='mx-1' href="#link1"><TbWorld className='mb-1 me-1' {...{ fontSize: '24px' }}/>Explore integrations</Nav.Link>
          <Nav.Link className='mx-1' href="#link2">Contact Sale</Nav.Link>
          <Nav.Link className='mx-1' href="#link3">Log in</Nav.Link>
        </Nav>
        <Button variant="primary" className="ml-2 signUpBtn" >Sign up</Button>
        </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default NavBar
