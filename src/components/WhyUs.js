import React from "react";
import referencje from "../img/referencje.png"
import doswiadczenie from "../img/doswiadczenie.png"
import happyclient from "../img/happycliente.png"
import dostepnosc from "../img/dostepnosc.png"
const WhyUs = () =>{

    return(
        <>
        <div className="why-us-title">DLACZEGO MY?</div>
        <hr className="line"></hr>
        <div className="ui container segment why-us-container">
            <div className="row why-us-row"  >
                <div className="col-sm-12 col-md-6 col-lg-3 ui segment why-us-segment ">
                    <span><img className="why-us-icons" src={doswiadczenie} alt="Odznaka oznaczająca doświadczenie"></img></span>
                    <div className="why-us-titles">DOŚWIADCZENIE</div>
                    <hr className="line"></hr>
                    <p className="why-us-p">Klienci z Wrocławia i okolic chętnie powierzają nam kolejne zlecenia malarskie i polecają nasze 
                        prace swoim znajomym. Solidne wykończenia wnętrz, szybkie terminy realizacji oraz estetyczne malowanie ścian 
                        sprawiają, że zaufało nam już wiele osób</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 ui segment why-us-segment">
                    <span><img className="why-us-icons" src={happyclient} alt="Odznaka zadowolonego klienta"></img></span>
                    <div className="why-us-titles">REFERENCJE</div>
                    <hr className="line"></hr>
                    <div className="why-us-p">Zadowoleni klienci z Wrocławia i okolic regularnie powierzają nam kolejne zlecenia malarskie
                        i chętnie polecają nasze usługi znajomym. Profesjonalne malowanie mieszkań i domów, które wykonujemy, 
                        buduje naszą renomę skuteczniej niż jakakolwiek reklama</div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 ui segment why-us-segment">
                    <span><img className="why-us-icons" src={referencje} alt="Odznaka profesjonalizmu"></img></span>
                    <div className="why-us-titles">PROFESJONALIZM</div>
                    <hr className="line"></hr>
                    <div className="why-us-p">Działamy z pełnym zaangażowaniem, realizując najwyższe standardy jakości. Nasza praca przebiega zgodnie 
                        z nowoczesnymi metodami zarządzania projektami, a po wszystkim dokładnie sprzątamy, byś mógł od razu cieszyć 
                        się czystą i gotową do użytku przestrzenią</div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 ui segment why-us-segment">
                    <span><img className="why-us-icons" src={dostepnosc} alt="Odznaka oznaczająca dostępność" ></img></span>
                    <div className="why-us-titles">DOSTĘPNOŚĆ</div>
                    <hr className="line"></hr>
                    <div className="why-us-p">Skontaktuj się z nami, opowiedz, co chcesz pomalować, a my dopasujemy harmonogram tak,
                         aby prace przebiegały sprawnie i bez zbędnego stresu. Szanujemy Twój czas!</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default WhyUs;