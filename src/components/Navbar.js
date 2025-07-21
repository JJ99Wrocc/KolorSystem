import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import kolorsystem from '../img/kolorsystem.png';
import { useNavigate, useLocation } from "react-router-dom";

function NavbarWeb() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // ✅ Tylko dla strony głównej "/"
    if (location.pathname !== "/") {
      setIsVisible(false); // resetuj widoczność
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll(); // dla początkowej pozycji
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <Navbar
      fixed="top"
      bg="white"
      data-bs-theme="light"
      className={`d-none d-lg-block navbar-web container-fluid ${
        location.pathname === "/" ? (isVisible ? "visible" : "") : "always-visible"
      }`}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand className="navbar" href="#home">
          <img src={kolorsystem} className="navbarweb-image" alt="logo" />
        </Navbar.Brand>
        <Nav className="ms-auto nav-links staaaar">
          <Nav.Link onClick={() => navigate("/")}>Strona główna</Nav.Link>
          <Nav.Link onClick={() => navigate("/estimate")}>Wycena</Nav.Link>
          <Nav.Link onClick={() => navigate("/contactus")}>Kontakt</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarWeb;
