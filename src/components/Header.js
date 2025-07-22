    import React, { useEffect, useState } from "react";
    // import headerimg from '../img/headerimg.png'
    import HeaderXXL from '../img/HeaderXXL.png'


import NavBarNavConst from "./NavbarNavConst";
import NavbarWebConst from "./NavbarWebConst";
import { useNavigate } from "react-router-dom";



    const Headers = () => {
            const [isVisible, setIsVisible] = useState(false);
            const navigate = useNavigate();
            useEffect(() =>{
                const handleScroll = () => {
                    if(window.scrollY < 99 ){
                        setIsVisible(true)
                    } else {
                        setIsVisible(false)
                    }

                    handleScroll();
                    window.addEventListener('scroll', handleScroll);
                    return () => window.removeEventListener('scroll', handleScroll)
                }
            })
        return( 
            <div className="wrapper">
                <img className="header-img lg-none d-none d-lg-block" src={HeaderXXL} alt="header-img" fetchpriority="high" >
                </img>
                <button className="order-header-btn"
                        onClick={() => navigate('/estimate')}                
                >UMÓW BEZPŁATNĄ WYCENE</button>
                <div className="header d-block d-lg-none">

            <NavBarNavConst />
    </div>
                <div    >
                    <NavbarWebConst />
                </div>

                {/* <div className="header-img-shadow"></div> */}
            </div>
        )
    }

    export default Headers;