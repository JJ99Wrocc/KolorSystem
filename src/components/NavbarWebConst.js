import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import kolorsystem from '../img/kolorsystem.png'
import { useNavigate } from "react-router-dom";

const NavbarWebConst = () =>{
      const navigate = useNavigate();
    return (
        <Navbar fixed="top"   data-bs-theme="light" className='d-none d-lg-block  container-fluid navbar-transparent '>
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand className='navbar' href="#home">
  
        <img src={kolorsystem} className="navbarweb-image" alt="logo" loading="lazy" />

          </Navbar.Brand>
        <Nav className="ms-auto nav-links nav-web-const-links" >
          <Nav.Link href="#home" onClick={()=> navigate("/")}>Strona główna</Nav.Link>
          <Nav.Link onClick={() => navigate("/estimate")} href="#features">Wycena</Nav.Link>
          <Nav.Link onClick={() => navigate("/contactus")} href="#pricing">Kontakt</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );    
    
}

export default NavbarWebConst;