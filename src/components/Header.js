import React, { useEffect, useState } from "react";
import headerM from "../img/headerM.webp";
import headerL  from "../img/headerL.webp"
import headerXL from "../img/headerXL.webp";
import headerXXL from '../img/headerXXL.webp'

import NavBarNavConst from "./NavbarNavConst";
import NavbarWebConst from "./NavbarWebConst";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 99);
    };

    handleScroll(); // uruchom na start
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="wrapper hero-wrapper">
      <div className="header d-block d-lg-none">
        <NavBarNavConst />
      </div>

      {/* Nawigacja desktopowa */}
      <div>
        <NavbarWebConst />
      </div>
      {/* Zdjęcia dla desktop / mobile */}
      <img
        className="header-img d-block d-lg-none"
        src={headerM}
        alt="header-m"
        fetchpriority="high"
      />
    
      <img
        className="header-img d-none d-lg-block d-xl-none"
        src={headerXL}
        alt="header-xl"
        fetchpriority="high"
      />
      <img 
      className=" header-img d-none d-xl-block"
      src={headerXXL}
      alt="header-xxl"
      fetchpriority="high"
      />

      {/* Przycisk */}
      <button
        className="order-header-btn"
        onClick={() => navigate("/estimate")}
      >
        UMÓW BEZPŁATNĄ WYCENĘ
      </button>

      {/* Nawigacja mobilna */}
    </div>
  );
};

export default Headers;
