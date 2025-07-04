import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";


import referencje from "../img/referencje.png";
import doswiadczenie from "../img/doswiadczenie.png";
import happyclient from "../img/happycliente.png";
import dostepnosc from "../img/dostepnosc.png";

const WhyUs = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const motionVariants = (index) => {
    if (isLargeScreen) {
      // Na ekranach ≥992px: z dołu lub z góry
      return {
        hidden: { opacity: 0, y: index % 2 === 0 ? 100 : -100 },
        visible: { opacity: 1, y: 0 },
      };
    } else {
      // Na ekranach <992px: z lewej lub z prawej
      return {
        hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        visible: { opacity: 1, x: 0 },
      };
    }
  };

  const data = [
    {
      img: doswiadczenie,
      title: "DOŚWIADCZENIE",
      alt: "Odznaka oznaczająca doświadczenie",
      text: `Klienci z Wrocławia i okolic chętnie powierzają nam kolejne zlecenia malarskie i polecają nasze 
        prace swoim znajomym. Solidne wykończenia wnętrz, szybkie terminy realizacji oraz estetyczne malowanie ścian 
        sprawiają, że zaufało nam już wiele osób`,
    },
    {
      img: happyclient,
      title: "REFERENCJE",
      alt: "Odznaka zadowolonego klienta",
      text: `Zadowoleni klienci z Wrocławia i okolic regularnie powierzają nam kolejne zlecenia malarskie
        i chętnie polecają nasze usługi znajomym. Profesjonalne malowanie mieszkań i domów, które wykonujemy, 
        buduje naszą renomę skuteczniej niż jakakolwiek reklama`,
    },
    {
      img: referencje,
      title: "PROFESJONALIZM",
      alt: "Odznaka profesjonalizmu",
      text: `Działamy z pełnym zaangażowaniem, realizując najwyższe standardy jakości. Nasza praca przebiega zgodnie 
        z nowoczesnymi metodami zarządzania projektami, a po wszystkim dokładnie sprzątamy, byś mógł od razu cieszyć 
        się czystą i gotową do użytku przestrzenią`,
    },
    {
      img: dostepnosc,
      title: "DOSTĘPNOŚĆ",
      alt: "Odznaka oznaczająca dostępność",
      text: `Skontaktuj się z nami, opowiedz, co chcesz pomalować, a my dopasujemy harmonogram tak,
        aby prace przebiegały sprawnie i bez zbędnego stresu. Szanujemy Twój czas!`,
    },
  ];

  return (
    <>
      <div className="why-us-title">DLACZEGO MY?</div>
      <hr className="line" />
      <div className="ui container segment why-us-container">
        <div className="row why-us-row">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="col-sm-12 col-md-6 col-lg-3 ui segment why-us-segment"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={motionVariants(index)}
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
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyUs;
