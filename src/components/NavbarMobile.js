import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import kolorsystem from '../img/kolorsystem.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function NavbarMobile() {
  const expand = 'lg'; 
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      // console.log('scrollY:', window.scrollY);
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll(); 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      fixed="top"
      bg="white"
      expand={expand}
      className={`d-block d-lg-none nav-mobile ${isVisible ? 'visible' : ''}`}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img className="nav-mobile-logo" src={kolorsystem} alt="KolorSystem logo" />
        </Navbar.Brand>

        {/* Burger */}
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          onClick={handleShow}
        />

        {/* Offcanvas menu */}
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Men
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                className="nav-links-mobile"
                href="#home"
                onClick={() => {
                  handleClose();
                  navigate('/');
                }}
              >
                Strona Główna
              </Nav.Link>
              <Nav.Link
                className="nav-links-mobile"
                href="#about"
                onClick={() => {
                  handleClose();
                  navigate('/estimate');
                }}
              >
                Wycena
              </Nav.Link>
              <Nav.Link
                className="nav-links-mobile"
                href="#contact"
                onClick={() => {
                  handleClose();
                  navigate('/contactus');
                }}
              >
                Kontakt
              </Nav.Link>
            </Nav>

            {/* Search form (opcjonalnie odkomentuj jeśli chcesz) */}
            {/* 
            <Form className="d-flex mt-3">
              <Form.Control type="search" placeholder="Search" className="me-2" />
              <Button variant="outline-success">Search</Button>
            </Form> 
            */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarMobile;
