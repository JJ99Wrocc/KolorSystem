import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

// Stałe komponenty
import NavbarWeb from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// Dynamiczne importy (code splitting)
const Headers = lazy(() => import("./components/Header"));
const Estimate = lazy(() => import("./components/estimate"));
const WhyUs = lazy(() => import("./components/WhyUs"));
const Picture = lazy(() => import("./components/picture"));
const Proces = lazy(() => import("./components/Process"));
const ContactUs = lazy(() => import("./components/ContactUs"));

// Bootstrap ładowany lokalnie przez npm

function LayoutWithNavAndFooter({ children }) {
  return (
    <>
      <NavbarWeb />
      <NavbarMobile />
      {children}
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        index
        element={
          <LayoutWithNavAndFooter>
            <Headers />
            <WhyUs />
            <Picture />
            <Proces />
          </LayoutWithNavAndFooter>
        }
      />
      <Route
        path="/estimate"
        element={
          <LayoutWithNavAndFooter>
            <Estimate />
          </LayoutWithNavAndFooter>
        }
      />
      <Route
        path="/contactus"
        element={
          <LayoutWithNavAndFooter>
            <ContactUs />
          </LayoutWithNavAndFooter>
        }
      />
      <Route
        path="/headers"
        element={
          <LayoutWithNavAndFooter>
            <Headers />
          </LayoutWithNavAndFooter>
        }
      />
    </Routes>
  );
}

function App() {
  useEffect(() => {
    const loadResources = async () => {
      const AOS = await import("aos");
      await import("aos/dist/aos.css");
      AOS.init({ duration: 1000 });

      await import("semantic-ui-css/semantic.min.css");
    };

    loadResources();
  }, []);

  return (
    <div className="App">
      {/* Helmet do preloadowania czcionki Google */}
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" />`,
          }}
        />
      </Helmet>

      <BrowserRouter basename="/KolorSystem">
        <div className="content">
          <Suspense fallback={<div>Ładowanie...</div>}>
            <AppRoutes />
          </Suspense>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
