import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import headerM from "../img/headerM.webp";
import headerXL from "../img/headerXL.webp";
import headerXXL from '../img/headerXXL.webp'
import { Helmet } from "react-helmet";
import brush from '../img/brush.svg'





import NavBarNavConst from "./NavbarNavConst";
import NavbarWebConst from "./NavbarWebConst";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const [ , setIsVisible] = useState(false);
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

      <h1 className="hero-h1">KOLOR SYSTEM</h1>
      <h3 className="hero-h3">Malowanie wnętrz</h3>
     
     <img className="hero-brush" src={brush} />


     <img className="hero-brush brush1" src={brush} />
   
      {/* <Helmet>
  <link rel="preload" as="image" href={headerM} />
</Helmet> */}
      <div className="header d-block d-lg-none">
        <NavBarNavConst />
      </div>

      <div>
        <NavbarWebConst />
      </div>
        {/* <img
        className="header-img d-block d-lg-none"
        src={headerM}
        alt="header-m"
        fetchpriority="auto"
        loading="eager"
      />
      
      <img
        className="header-img d-none d-lg-block d-xl-none"
        src={headerXL}
        alt="header-xl"
         fetchpriority="auto"
         loading="eager"
      />
      <img 
      className=" header-img d-none d-xl-block"
      src={headerXXL}
      alt="header-xxl"
       fetchpriority="auto"
              loading="eager"
             
      /> */}

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
