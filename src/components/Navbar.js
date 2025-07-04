// ./components/Navbar.js
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import kolorsystem from '../img/kolorsystem.png'
import { useNavigate } from "react-router-dom";

function NavbarWeb() {
  const navigate = useNavigate();
  return (
    <Navbar fixed="top" bg="white" data-bs-theme="light" className='d-none d-lg-block navbar-web container-fluid'>
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand className='navbar' href="#home">
  
          <img  src={kolorsystem} className="navbarweb-image">
          
</img>
          </Navbar.Brand>
        <Nav className="ms-auto nav-links">
        <NavDropdown title="Usługi" id="nav-dropdown">
                <NavDropdown.Item href="#one">One</NavDropdown.Item>
                <NavDropdown.Item href="#two">Two</NavDropdown.Item>
              </NavDropdown>
          <Nav.Link href="#home" onClick={()=> navigate("/")}>Strona główna</Nav.Link>
          <Nav.Link onClick={() => navigate("/estimate")} href="#features">Wycena</Nav.Link>
          <Nav.Link href="#pricing">Kontakt</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarWeb;
