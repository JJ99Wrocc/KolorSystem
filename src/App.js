import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavbarWeb from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Headers from "./components/Header";
import OrderEstimate from "./components/OrderEstimate";
import Estimate from "./components/estimate";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";
import Picture from "./components/picture";
import MySwiper from "./components/MySwiper";
import Proces from "./components/Process";

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
            <WhyUs />
            <Picture />
            <MySwiper />
            <Proces />
          </LayoutWithNavAndFooter>
        }
      />
      <Route path="/estimate" element={
        <LayoutWithNavAndFooter>
          <Estimate />
        </LayoutWithNavAndFooter>
      } />
      <Route path="/headers" element={
        <LayoutWithNavAndFooter>
          <Headers />
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
