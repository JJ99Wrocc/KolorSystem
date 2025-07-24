import React, { useState } from "react";
import NavBarNavConst from "./NavbarNavConst";
import NavbarWebConst from "./Navbar";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";

import emailjs from 'emailjs-com';
const ContactUs = () => {
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [text, setText] = useState("");

  const nameValidate = (value) => {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿżźćńółęąśŻŹĆĄŚĘŁÓŃ\s'-]{2,}$/;
    setIsNameValid(nameRegex.test(value));
  };

  const emailValidate = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
  };

  const phoneValidate = (value) => {
    const phoneRegex = /^[0-9]{9}$/;
    setIsPhoneValid(phoneRegex.test(value));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (
      !isNameValid ||
      !isEmailValid ||
      !isPhoneValid ||
      !isConsentGiven ||
      text.trim() === ""
    ) {
      alert("Uzupełnij poprawnie wszystkie pola i zaakceptuj zgodę.");
      return;
    }
  
    const dataToSend = {
      name,
      email,
      phone,
      text,
      consent: isConsentGiven,
      timestamp: new Date(),
    };
  
    try {
      // Zapis do Firestore
      await addDoc(collection(db, "estimates"), dataToSend);
  
      // Wysyłka emaila przez EmailJS
      const templateParams = {
        name,
        email,
        phone,
        text,
        consent: isConsentGiven,
      };
  
      const result = await emailjs.send(
        "service_6clsdqg",
        "template_t33wcuk",
        templateParams,
        "b0kSQQdQ70kSaSPcg"
      );
  
      console.log("E-mail wysłany:", result.text);
  
      // Reset formularza
      setName("");
      setIsNameValid(false);
      setEmail("");
      setIsEmailValid(false);
      setPhone("");
      setIsPhoneValid(false);
      setText("");
      setIsConsentGiven(false);
  
      alert("Dziękujemy, wiadomość została wysłana. Odpowiemy w ciągu 24 godzin");
    } catch (error) {
      console.error("Błąd przy wysyłaniu formularza:", error);
      alert("Błąd przy wysyłaniu formularza.");
    }
  };
  
  return (
    <div className="contact-us-box">
           <div className=" d-block d-lg-none">
            <NavBarNavConst />
    </div>
    <div>
      <NavbarWebConst />
     </div>
      <div className="contact-us-img" alt="niebieskie tło">
        <div className="contact-us-img"></div>
        <div className="contact-us-shadow"></div>
        <div className="estimate-title">KONTAKT</div>
      </div>

      <div className="container">
    
        <h2 className="contact-heading">Masz pytanie? Napisz do nas!</h2>
<p className="contact-subheading">Odpowiadamy w ciągu 24h</p>
        <hr className="line" />

        <div className="contact-box">
          <div>
            <i className="fa-solid fa-address-book"></i>
          </div>
          <div className="text">
          <div className="contact-link"><i className="fa-solid fa-phone"></i> <a 
          className="linkk" href="tel:669396328">
              + 48 669396328
            </a></div>
            <div className="contact-link"><i className="fa-solid fa-envelope"></i> <a
              className="linkk"
              href="mailto:kolor@system.pl"
            >
              kolor@system.pl
            </a></div>
          </div>
        </div>
      </div>

      {/* FORM START */}
      <form className="container contact-us-form" onSubmit={handleSubmit}>
        <div className="contact-us-form-left-box">
          <input
            type="text"
            className="estimate-input contact-us-input iin"
            placeholder="Imię i nazwisko/ nazwa firmy"
            value={name}
            onChange={(e) => {
              const newName = e.target.value;
              setName(newName);
              nameValidate(newName);
            }}
          />
          {name.length === 0 ? (
            <p className="contact-p">Np: Jan Kowalski</p>
          ) : !isNameValid ? (
            <p className="error-name">Musisz wypełnić te pole</p>
          ) : null}

          <input
            type="email"
            className="estimate-input contact-us-input"
            placeholder="Adres email"
            value={email}
            onChange={(e) => {
              const newEmail = e.target.value;
              setEmail(newEmail);
              emailValidate(newEmail);
            }}
          />
          {email.length === 0 ? (
            <p className="contact-p">Np: jankowalski@gmail.com</p>
          ) : !isEmailValid ? (
            <p className="error-name">Wpisz poprawny adres email</p>
          ) : null}

          <input
            type="tel"
            className="estimate-input contact-us-input"
            placeholder="Telefon kontaktowy"
            value={phone}
            onChange={(e) => {
              const newPhone = e.target.value;
              setPhone(newPhone);
              phoneValidate(newPhone);
            }}
          />
          {phone.length === 0 ? (
            <p className="contact-p">Np: 123 333 337</p>
          ) : !isPhoneValid ? (
            <p className="error-name">Wpisz poprawny numer telefonu</p>
          ) : null}
        </div>

        <div className="contact-us-form-right-box">
          <textarea
            className="estimate-textarea"
            placeholder="Wpisz wiadomość..."
            rows="5"
            value={text}
            onChange={(e) => {
              const newText = e.target.value;
              setText(newText);
            }}
          />

          <label className="estimate-info">
            <input
              type="checkbox"
              className="checkbox"
              name="zgoda"
              value="check"
              checked={isConsentGiven}
              onChange={(e) => setIsConsentGiven(e.target.checked)}
            />
            Niniejszym, wyrażam zgodę na gromadzenie i przetwarzanie moich
            danych osobowych przez KolorSystem w celu przesyłania mi na adres
            poczty elektronicznej, oraz numer telefonu informacji
            marketingowych, a także bezpośredniego kontaktu telefonicznego w
            celu marketingowym oraz na profilowanie przez Administratora danych
            moich danych osobowych w celu przedstawienia mi zindywidualizowanej
            oferty, reklamy i promocji. Jednocześnie jestem świadomy/a, iż w/w
            podmioty są administratorami moich danych osobowych.
          </label>

          <button type="submit" className="estimate-btn">
            Wyślij
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
