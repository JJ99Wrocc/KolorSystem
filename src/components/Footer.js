import React from "react";    



const Footer = () => {
    return ( 
        <footer className="ui inverted  bg-black text-white vertical segment footer " >
            <div className="ui container" style={{position:"relative"}}>
               
                  
                    <div >
                        <p className="Copy-right  ">© {new Date().getFullYear()} FlowMart. All rights reserved.</p>
                    </div>
                    <div  style={{position: "relative"}} >

                            <a href="https://www.instagram.com/jj99flex/"><i className="fa-brands fa-instagram  "></i></a>
                            <a href="https://www.facebook.com/jachimon.esang"><i className="fa-brands fa-facebook " style={{marginLeft: '15px'}}></i></a>
                            <a href="#">
                   <i className="fa-solid fa-circle-arrow-up fixed-box" ></i>
                            </a>
                            
                    </div>
                </div>
        
        </footer>
    );
}

export default Footer;
