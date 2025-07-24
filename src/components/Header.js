import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import headerM from "../img/headerM.webp";
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

    handleScroll(); 
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
    <div className="wrapper hero-wrapper">
      <div className="header d-block d-lg-none">
        <NavBarNavConst />
      </div>

      <div>
        <NavbarWebConst />
      </div>
      <picture>
  <source
    srcSet={`${headerXXL} 1920w, ${headerXL} 1024w, ${headerM} 480w`}
    sizes="(min-width: 1200px) 1920px, (min-width: 992px) 1024px, 480px"
  />
  <img
    src={headerM}
    alt="header"
    loading="eager"
    fetchpriority="high"
    className="header-img"
  />
</picture>


<motion.button
  className="order-header-btn"
  onClick={() => navigate('/estimate')}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  UMÓW BEZPŁATNĄ WYCENĘ
</motion.button>


<div className="header-shadow"> </div>
    </div>
  );
};

export default Headers;
