import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import headerM from "../img/headerM.webp";
import headerXL from "../img/headerXL.webp";
import headerXXL from '../img/headerXXL.webp';
import { Helmet } from "react-helmet";
import brush from '../img/brush.svg';

import NavBarNavConst from "./NavbarNavConst";
import NavbarWebConst from "./NavbarWebConst";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const [, setIsVisible] = useState(false);
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
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={headerM}
          type="image/webp"
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="image"
          href={headerXL}
          type="image/webp"
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="image"
          href={headerXXL}
          type="image/webp"
          fetchpriority="high"
        />
      </Helmet>

      <img className="hero-brush" src={brush} alt="plama" />
      <img className="hero-brush brush1" src={brush} alt="plama" />

      <div className="header d-block d-lg-none">
        <NavBarNavConst />
      </div>

      <div>
        <NavbarWebConst />
      </div>

      <picture>
        <source srcSet={headerXXL} media="(min-width: 1200px)" type="image/webp" />
        <source srcSet={headerXL} media="(min-width: 992px)" type="image/webp" />
        <img
          className="header-img"
          src={headerM}
          alt="header image"
          fetchpriority="high"
          loading="eager"
    
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

      <div className="header-shadow"></div>
    </div>
  );
};

export default Headers;
