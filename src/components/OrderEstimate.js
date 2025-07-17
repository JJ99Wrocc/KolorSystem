import React from "react";
import { useNavigate } from "react-router-dom";


const OrderEstimate = () => {
    const navigate = useNavigate();
    return(
        <div className="order-estimate-box">
            <div className="order-estimate-title"> 
                <button className="order-estimate-btn"
                        onClick={() => navigate('/estimate')}                
                >ZAMÓW BEZPŁATNĄ WYCENE</button>
            </div>
        </div>

    )
}

export default OrderEstimate;