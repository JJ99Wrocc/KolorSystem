import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavbarWeb from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMobile from "./components/NavbarMobile";
import Headers from "./components/Header";
import OrderEstimate from "./components/OrderEstimate";




function App() {
  return (
    <div className="App">
         <BrowserRouter basename="/KolorSystem">
            <NavbarWeb  />
            <NavbarMobile />
            <Headers />
            <OrderEstimate />
        </BrowserRouter>
      
    </div>
  );
}

export default App;
