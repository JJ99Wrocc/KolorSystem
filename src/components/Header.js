    import React from "react";
    // import headerimg from '../img/headerimg.png'
    import HeaderXXL from '../img/HeaderXXL.png'


import NavBarNavConst from "./NavbarNavConst";



    const Headers = () => {

        return( 
            <div className="wrapper">
                <img className="header-img lg-none d-none d-lg-block" src={HeaderXXL} alt="header-img"></img>
                <div className="header d-block d-lg-none">
            <NavBarNavConst />
    </div>

                {/* <div className="header-img-shadow"></div> */}
            </div>
        )
    }

    export default Headers;