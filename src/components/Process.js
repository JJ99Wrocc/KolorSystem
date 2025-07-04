import React from "react";

const Proces = () => {

    return(
        <div className="process"> 
                {/* <div style="width: 1px; height: 80%; background-color: black;"></div> */}
                <div className=" container ui segment process-container">
                    <div className="estimate-title-box">PRZEBIEG WSPÓŁPRACY</div>
                    <hr  className="line"></hr>
                        <div>                                  
                                <p className="process-titles"><i class="fa-solid fa-phone"></i>  Kontakt i darmowa wycena</p>
                                <p className="process-p">Specjalizujemy się w profesjonalnym malowaniu – działamy na terenie Wrocławia i okolic.
            Wypełnij nasz formularz online lub zadzwoń, a skontaktujemy się z Tobą, by umówić dogodny termin spotkania.
            Zaufaj fachowcom od malowania wnętrz i elewacji</p>
                        </div>
                        <div>   
                            <p className="process-titles"> <i class="fa-solid fa-house-circle-check"></i>  Wizyta i finalizacja oferty</p>
                            <p className="process-p">Podczas spotkania na terenie Wrocławiai i okolicach Wrocławia oceniamy stan techniczny powierzchni przeznaczonych do malowania, 
                                omawiamy zakres prac i przygotowujemy precyzyjną wycenę naszych usług malarskich</p>
                        </div>
                        <div>                            
                            <p className="process-titles"> <i class="fa-solid fa-palette"></i>  Dobór kolorów</p>
                            <p className="process-p">Nie wiesz, jakie kolory wybrać? Nasz zespół pomoże Ci dobrać idealną paletę barw do każdego wnętrza – i nie tylko</p>
                        </div>
                        <div>                            
                            <p className="process-titles"> <i class="fa-solid fa-paint-roller"></i> Malujemy starannie i kompleksowo</p>
                            <p className="process-p">Nie musisz się o nic martwić – przesuniemy meble, naprawimy drobne pęknięcia i starannie zabezpieczymy wszystko, czego nie trzeba malować. Potem ruszamy do pracy!</p>
                        </div>
                        <div>                            
                            <p className="process-titles"><i class="fa-solid fa-border-all"></i> Twoja nieruchomość w nowych kolorach!</p>
                            <p className="process-p">Nasz zespół doświadczonych malarzy z Wrocławia realizuje kompleksowe usługi malarskie zgodnie z najwyższymi standardami
                                 – zarówno wewnątrz, jak i na zewnątrz budynków. Gwarantujemy precyzję, czystość i trwały efekt.</p>
                        </div>
                        <div>                            
                            <p className="process-titles"><i class="fa-solid fa-brush"></i>  Sprzątanie i odbiór prac</p>
                            <p className="process-p">Dbamy o Twoją własność z najwyższą starannością. Po zakończeniu malowania dokładnie sprzątamy, tak aby Twoja nieruchomość była w idealnym porządku — poza świeżo pomalowanymi ścianami. 
                                Następnie wspólnie odbieramy i sprawdzamy jakość wykonanych prac. Dokładne, precyzyjne i szybkie malowanie? We Wrocławiu to zadanie dla specjalistów z KolorSystem!</p>
 
                        </div>
                </div>
        </div>
    )
}

export default Proces;