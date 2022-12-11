<Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
<Container className='d-flex justify-content-between w-100'>
  <span>
  <Navbar.Brand href="#"><img src="logo.png" width={100}/></Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  </span>

  <span>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link eventKey={2} href="#memes">Über mich</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">Lebenslauf</Nav.Link>
      <NavDropdown title="Projekte" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.2">Webseiten</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Python-Projekte</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link eventKey={2} href="#memes">Kontakt</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </span>

</Container>
</Navbar>