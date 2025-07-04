import React from "react";
import { motion } from "framer-motion";

const processData = [
  {
    title: "Kontakt i darmowa wycena",
    icon: "fa-phone",
    text:
      "Specjalizujemy się w profesjonalnym malowaniu – działamy na terenie Wrocławia i okolic. Wypełnij nasz formularz online lub zadzwoń, a skontaktujemy się z Tobą, by umówić dogodny termin spotkania. Zaufaj fachowcom od malowania wnętrz i elewacji.",
  },
  {
    title: "Wizyta i finalizacja oferty",
    icon: "fa-house-circle-check",
    text:
      "Podczas spotkania na terenie Wrocławia i okolicach Wrocławia oceniamy stan techniczny powierzchni przeznaczonych do malowania, omawiamy zakres prac i przygotowujemy precyzyjną wycenę naszych usług malarskich.",
  },
  {
    title: "Dobór kolorów",
    icon: "fa-palette",
    text:
      "Nie wiesz, jakie kolory wybrać? Nasz zespół pomoże Ci dobrać idealną paletę barw do każdego wnętrza – i nie tylko.",
  },
  {
    title: "Malujemy starannie i kompleksowo",
    icon: "fa-paint-roller",
    text:
      "Nie musisz się o nic martwić – przesuniemy meble, naprawimy drobne pęknięcia i starannie zabezpieczymy wszystko, czego nie trzeba malować. Potem ruszamy do pracy!",
  },
  {
    title: "Twoja nieruchomość w nowych kolorach!",
    icon: "fa-border-all",
    text:
      "Nasz zespół doświadczonych malarzy z Wrocławia realizuje kompleksowe usługi malarskie zgodnie z najwyższymi standardami – zarówno wewnątrz, jak i na zewnątrz budynków. Gwarantujemy precyzję, czystość i trwały efekt.",
  },
  {
    title: "Sprzątanie i odbiór prac",
    icon: "fa-brush",
    text:
      "Dbamy o Twoją własność z najwyższą starannością. Po zakończeniu malowania dokładnie sprzątamy, tak aby Twoja nieruchomość była w idealnym porządku — poza świeżo pomalowanymi ścianami. Następnie wspólnie odbieramy i sprawdzamy jakość wykonanych prac. Dokładne, precyzyjne i szybkie malowanie? We Wrocławiu to zadanie dla specjalistów z KolorSystem!",
  },
];

const Proces = () => {
  return (
    <div className="process">
      <div className="container ui segment process-container">
        <div className="estimate-title-box">PRZEBIEG WSPÓŁPRACY</div>
        <hr className="line" />

        {processData.map((item, index) => (
          <motion.div
            className="process-box"
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 + index * 0.2 }}
          >
            <p className="process-titles">
              <i className={`fa-solid ${item.icon}`}></i> {item.title}
            </p>
            <p className="process-p">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Proces;
