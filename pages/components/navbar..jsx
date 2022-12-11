import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




export default function Navbari() {
  return (
    <div style={{height: "40px"}}>
    <Navbar collapseOnSelect expand="lg" className='bg-light bg-opacity-25' variant="dark" id='navbar'>
      <Container>
        <Navbar.Brand href="#home"><img src="logo.png" width={100}/></Navbar.Brand>
        <Navbar.Toggle style={{color: "000000"}}aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link href="#deets" style={{color: "#000000"}}>Über mich</Nav.Link>
            <Nav.Link href="#Lebenslauf" style={{color: "#000000"}}>Lebenslauf</Nav.Link>
            <NavDropdown title={<span  style={{color: "#000000"}}>Projekte</span>} id="collasible-nav-dropdown" style={{color: "#000000"}}>
              <NavDropdown.Item href="#action/3.1" style={{color: "#000000"}}>Webseiten</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{color: "#000000"}}>Python-Projekte</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="/kontakt" style={{color: "#000000"}}>Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
