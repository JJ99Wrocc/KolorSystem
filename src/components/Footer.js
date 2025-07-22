import React from "react";    
import { useNavigate, useLocation} from "react-router-dom";


const Footer = () => {
        const navigate = useNavigate();
        const location = useLocation();

        const isEstimatePage = location.pathname === "/estimate";
    return ( 
        <footer className="ui inverted  bg-black text-white vertical segment footer " >
            <div className="ui container" style={{position:"relative"}}>
                    
            {isEstimatePage ? (
  
   <div className="footer-estimate-img"></div>
) : (
    <button
    className="footer-estimate-btn"
    onClick={() => navigate("/estimate")}
  >
    UMÓW BEZPŁATNĄ WYCENĘ
  </button>
)}


            <div className="footer-contact">
  <p className="footer-contact-title">KONTAKT</p>
  
  <div className="footer-contact-icon">
    <div className="footer-contact-row">
      <i className="fa-solid fa-phone-volume"></i>
      <a className="footer-contact-p phone" href="tel:+48123456789">Telefon: +48 669396328</a>
    </div>
    
    <div className="footer-contact-row">
      <i className="fa-solid fa-envelope"></i>
      <a className="footer-contact-p e-mail" href="mailto:kolor@system.pl">Email: kolor@system.pl</a>
    </div>
  </div>
</div>

                  
                    <div >
                        <p className="Copy-right  ">© {new Date().getFullYear()} KolorSystem. All rights reserved.</p>
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
