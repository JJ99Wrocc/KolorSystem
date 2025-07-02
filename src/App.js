import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import NavbarWeb from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Headers from "./components/Header";
import OrderEstimate from "./components/OrderEstimate";
import Estimate from "./components/estimate";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";

function LayoutWithNavAndFooter({ children }) {
  return (
    <>
      <NavbarWeb />
      <NavbarMobile />
      {children}
      {/* <Footer /> */}
    </>
  );
}

function AppRoutes(){
  return(
    <Routes>
      <Route
        index
        element={
          <LayoutWithNavAndFooter>
            <Headers />
            <OrderEstimate />
          </LayoutWithNavAndFooter>
        }
      />
      <Route path="/estimate" element={
        <LayoutWithNavAndFooter>
          <Estimate />
        </LayoutWithNavAndFooter>
      } />
    </Routes>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/KolorSystem">
      <div className="content">
          <AppRoutes />
        </div>
        <Footer />
      </BrowserRouter >
    </div>
  );
}

export default App;
