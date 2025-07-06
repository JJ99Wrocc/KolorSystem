import React from "react";
import headerimg from '../img/headerimg.png'


const Headers = () => {

    return( 
        <div className="wrapper">
            <img className="header-img lg-none" src={headerimg}></img>
            
            {/* <div className="header-img-shadow"></div> */}
        </div>
    )
}

export default Headers;