import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    import Offcanvas from 'react-bootstrap/Offcanvas';
    import kolorsystem from '../img/kolorsystem.webp';
    import { useNavigate } from 'react-router-dom';
    import { useState } from 'react';




const NavBarNavConst = ( ) =>{
    const expand = 'lg'; 
    const [show, setShow] = useState(false);
    
    const navigate = useNavigate();
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     return (
        <div>
             <Navbar expand="lg" bg="transparent" className="mobile-navbar"
                   style={{zIndex:'1'}}>
        <Container fluid>
        <Navbar.Brand href="#">
            <img className="nav-mobile-logo" src={kolorsystem} alt="KolorSystem logo"  loading="lazy"/>
        </Navbar.Brand>

        <Navbar.Toggle
            className="e"
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
       
     )
}

export default NavBarNavConst;