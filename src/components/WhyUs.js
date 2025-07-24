import React, { useEffect, useState } from "react";

import profesjonalizm from '../img/profesjonalizm.avif'
import doświadczenie from "../img/doświadczenie.avif";
import zadowolony from "../img/zadowolony.avif";
import dostepnosc from "../img/dostepnosc.avif";

const WhyUs = () => {
  const [, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      img: doświadczenie,
      title: "DOŚWIADCZENIE",
      alt: "Odznaka oznaczająca doświadczenie",
      text: `Znamy się na ścianach - i to dosłownie. Naprawiamy, wygładzamy, malujemy tak, by efekt był trwały i estetyczny.
       Zdobywamy doświadczenie przy każdym zleceniu, dbając o jakość niezależnie od jego rozmiau`,
    },
    {
      img: zadowolony,
      title: "POLECENIA",
      alt: "Odznaka zadowolonego klienta",
      text: `Budujemy długofalowe relacje - wielu klientów wraca do nas przy kolejnych zleceniach malarskich i pracach związanych z naprawą ścian. 
      Często polecają nas znajomym. To najlepszy dowódm że można na nas liczyć.`,
    },
    {
      img: profesjonalizm,
      title: "PROFESJONALIZM",
      alt: "Odznaka profesjonalizmu",
      text: `Działamy z pełnym zaangażowaniem, realizując najwyższe standardy jakości. Nasza praca przebiega zgodnie 
        z nowoczesnymi metodami zarządzania projektami, a po wszystkim dokładnie sprzątamy, byś mógł od razu cieszyć 
        się czystą i gotową do użytku przestrzenią`,
    },
    {
      img: dostepnosc,
      title: "ELASTYCZNOŚĆ",
      alt: "Odznaka oznaczająca dostępność",
      text: `Skontaktuj się z nami, opowiedz, co chcesz pomalować, a my dopasujemy harmonogram tak,
        aby prace przebiegały sprawnie i bez zbędnego stresu. Szanujemy Twój czas!`,
    },
  ];

  return (
    <>
      <div className="why-us-title" style={{ overflowX: "auto" }}>DLACZEGO MY?</div>
      <hr className="line" />
      <div className="ui container segment why-us-container">
        <div className="row why-us-row">
          {data.map((item, index) => (
            <div
              key={index}
              className="col-sm-12 col-md-6 col-lg-3 ui segment why-us-segment"
            >
              <span>
                <img
                  className="why-us-icons"
                  src={item.img}
                  alt={item.alt}
                />
              </span>
              <div className="why-us-titles">{item.title}</div>
              <hr className="line" />
              <p className="why-us-p">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyUs;
