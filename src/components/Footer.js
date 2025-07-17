import React from "react";    



const Footer = () => {
    return ( 
        <footer className="ui inverted  bg-black text-white vertical segment footer " >
            <div className="ui container" style={{position:"relative"}}>
               
                  
                    <div >
                        <p className="Copy-right  ">© {new Date().getFullYear()} FlowMart. All rights reserved.</p>
                    </div>
                    <div  style={{position: "relative"}} >

                            
                            <a href="#">
                   <i className="fa-solid fa-circle-arrow-up fixed-box" ></i>
                            </a>
                            
                    </div>
                </div>
        
        </footer>
    );
}

export default Footer;
