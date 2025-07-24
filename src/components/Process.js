import React from "react";

const processData = [
  {
    title: "Kontakt i wycena",
    icon: "fa-phone",
    text:
      "Zadzwoń lub wypełnij formularz - oddzwonimy, ustalimy termin i przygotujemy darmową wycene.",
  },
  {
    title: "Spotkanie i oferta",
    icon: "fa-house-circle-check",
    text:
      "Przyjdziemy na miejsce, sprawdzimy stan ścian i ustalimy zakres prac. Otrzymujesz konkretną ofertę bez ukrytych kosztów.",
  },
  {
    title: "Dobór kolorów",
    icon: "fa-palette",
    text:
      "Masz wątpliwości? Pomożemy dobrać kolory idealnie dopasowane do wnętrza",
  },
  {
    title: "Przygotowanie i malowanie",
    icon: "fa-paint-roller",
    text:
      "Zabezpieczamy pomieszczenia, przesuwamy meble, naprawiamy drobne ustarki - i działamy",
  },
  {
    title: "Efekt końcowy",
    icon: "fa-border-all",
    text:
      "Malujemy precyzyjnie i czysto, wewnątrz i na zewnątrz. Gwarantujemy trwały efekt.",
  },
  {
    title: "Sprzątanie i odbiór",
    icon: "fa-brush",
    text:
      "Po pracy zostawiamy porządek i wspólnie odbieramy zlecenie. Bez poprawek - jest zrobione raz, a dobrze",
  },
];

const Proces = () => {
  return (
    <div className="process" style={{ overflowX: "auto" }}>
      <div className="container ui segment process-container">
        <div className="estimate-title-box">PRZEBIEG WSPÓŁPRACY</div>
        <hr className="line" />

        {processData.map((item, index) => (
          <div className="process-box" key={index}>
            <p className="process-titles">
              <i className={`fa-solid ${item.icon}`}></i> {item.title}
            </p>
            <p className="process-p">{item.text}</p>
            {index !== processData.length - 1 && (
              <div className="arrow-down">
                <i className="fa-solid fa-arrow-down"></i>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proces;
