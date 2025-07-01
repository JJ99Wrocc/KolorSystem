import React from "react";
import NavbarWeb from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMobile from "./components/NavbarMobile";
import Headers from "./components/Header";


function App() {
  return (
    <div className="App">
      <NavbarWeb  />
      <NavbarMobile />
      <Headers />
    </div>
  );
}

export default App;
