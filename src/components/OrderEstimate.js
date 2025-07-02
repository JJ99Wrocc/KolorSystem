import React from "react";
import { useNavigate } from "react-router-dom";


const OrderEstimate = () => {
    const navigate = useNavigate();
    return(
        <div className="order-estimate-box">
            <div className="order-estimate-title"> 
                <p className="order-estimate-left-sub">KOLOR</p>
                <button className="order-estimate-btn"
                        onClick={() => navigate('/estimate')}                
                >ZAMÓW BEZPŁATNĄ WYCENE</button>
                <p className="order-estimate-right-sub">SYSTEM</p>
            </div>
        </div>
    )
}

export default OrderEstimate;