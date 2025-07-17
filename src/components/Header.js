import React from "react";
import headerimg from '../img/headerimg.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import kolorsystem from '../img/kolorsystem.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Headers = () => {
      const expand = 'lg'; 
      const [show, setShow] = useState(false);
     
      const navigate = useNavigate();
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    return( 
        <div className="wrapper">
            <img className="header-img lg-none d-none d-lg-block" src={headerimg} alt="header-img"></img>
            <div className="header d-block d-lg-none">
  <Navbar expand="lg" bg="transparent" className="mobile-navbar">
    <Container fluid>
      <Navbar.Brand href="#">
        <img className="nav-mobile-logo" src={kolorsystem} alt="KolorSystem logo" />
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls={`offcanvasNavbar-expand-${expand}`}
        onClick={handleShow}
      />

      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link onClick={() => { handleClose(); navigate('/'); }}>
              Strona Główna
            </Nav.Link>
            <Nav.Link onClick={() => { handleClose(); navigate('/estimate'); }}>
              Wycena
            </Nav.Link>
            <Nav.Link onClick={() => { handleClose(); navigate('/contactus'); }}>
              Kontakt
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
</div>

            {/* <div className="header-img-shadow"></div> */}
        </div>
    )
}

export default Headers;