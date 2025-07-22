import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import emailjs from 'emailjs-com';
import NavBarNavConst from "./NavbarNavConst";
import NavbarWebConst from "./NavbarWebConst";

const Estimate = () => {
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [address, setAddress] = useState("");
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [wybor, setWybor] = useState("");
  const [wybor2, setWybor2] = useState("");
  const [metrarz1, setMetrarz1] = useState("");
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
  };

  const validateName = (value) => {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿżźćńółęąśŻŹĆĄŚĘŁÓŃ\s'-]{2,}$/;
    setIsNameValid(nameRegex.test(value));
  };

  const addressValid = (value) => {
    const addressRegex = /^[A-Za-z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ\s,]{5,}$/;
    setIsAddressValid(addressRegex.test(value));
  };

  const validatePhone = (value) => {
    const phoneRegex = /^[0-9]{9}$/;
    setIsPhoneValid(phoneRegex.test(value));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit clicked");
    alert("Submit clicked");
    if (
      !isNameValid ||
      !isEmailValid ||
      !isPhoneValid ||
      !isAddressValid ||
      wybor === "" ||
      wybor2 === "" ||
      metrarz1 === ""  ||
      !isConsentGiven
    ) {
      alert("Uzupełnij poprawnie wszystkie pola i zaakceptuj zgodę.");
      return;
    }

    const dataToSend = {
      name,
      email,
      phone,
      address,
      wybor,
      wybor2,
      metrarz1,
      consent: isConsentGiven,
      timestamp: new Date(),
    };

    try {
      await addDoc(collection(db, "estimates"), dataToSend);
      alert("Dziękujemy, wiadomość została wysłana. Odpowiemy w ciągu 24 godzin.");

      // Czyszczenie formularza
      setName("");
      setIsNameValid(false);
      setEmail("");
      setIsEmailValid(false);
      setPhone("");
      setIsPhoneValid(false);
      setAddress("");
      setIsAddressValid(false);
      setWybor("");
      setWybor2("");
      setMetrarz1("");
      setIsConsentGiven(false);
    } catch (error) {
      alert("Błąd wysyłania: " + error.message);
    }
    async function sendData(data) {
        try {
          const docRef = await addDoc(collection(db, "estimates"), data);
          console.log("Dokument zapisany z ID:", docRef.id);
        } catch (error) {
          console.error("Błąd zapisu dokumentu:", error);
        }
      }
      const templateParams = {
        name: name,
        email: email,
        phone: phone,
        wybor: wybor,
        wybor2: wybor2,
        metrarz1: metrarz1,
      };
    await  emailjs.send(
        "service_6clsdqg",
        "template_t33wcuk",
        templateParams,
        "b0kSQQdQ70kSaSPcg"
      ).then((result) => {
          console.log("E-mail wysłany!", result.text);
          // możesz dodać np. alert("Dziękujemy za kontakt!")
      }, (error) => {
          console.error("Błąd wysyłania e-maila:", error);
      });
  };

  return (
    
    <div className="estimate-box">
       <div className=" d-block d-lg-none">
            <NavBarNavConst />
    </div>
    
      <div className="estimate-img" alt="czerwone tło" loading="lazy">
        <div className="estimate-img-shadow"></div>
        <div className="estimate-title">WYCENA</div>
      </div>

      <div className="ui container estimate-container">
        <p className="estimate-title-p">POWIEDZ NAM CO MAMY POMALOWAĆ</p>
        <hr />
        <div className="estimate-p">
          <div style={{ paddingBottom: "20px" }} className="est-p">
            W celu otrzymania bezpłatnej, spersonalizowanej wyceny usług
            malarskich, prosimy o wypełnienie poniższego formularza lub kontakt
            telefoniczny w celu umówienia spotkania!!
          </div>
          <p className="est-pp">Dziękujemy za zainteresowanie naszą ofertą :)</p>
        </div>
      </div>

      <div className="container">
        <form className="ui segment estimate-form" onSubmit={handleSubmit}>
          <div className="estimate-form-left-box">
            <p className="estimate-title-box">DANE KONTAKTOWE</p>

            <input
              type="text"
              placeholder="Imię i nazwisko/ nazwa firmy"
              className="estimate-input "
              value={name}
              onChange={(e) => {
                const newName = e.target.value;
                setName(newName);
                validateName(newName);
          
              }}
            />
            {!isNameValid && name.length > 0 && (
              <p className="error-name">Musisz wypełnić te pole</p>
            )}

            <input
              type="email"
              placeholder="Adres e-mail"
              className="estimate-input"
              value={email}
              onChange={(e) => {
                const newEmail = e.target.value;
                setEmail(newEmail);
                validateEmail(newEmail);
              }}
            />
            {!isEmailValid && email.length > 0 && (
              <p className="error-name">Wpisz poprawny adres email</p>
            )}

            <input
              type="tel"
              placeholder="Telefon kontaktowy"
              className="estimate-input"
              value={phone}
              onChange={(e) => {
                const onlyNums = e.target.value.replace(/\D/g, "");
                setPhone(onlyNums);
                validatePhone(onlyNums);
              }}
            />
            {!isPhoneValid && phone.length > 0 && (
              <p className="error-name">Wpisz poprawny numer telefonu</p>
            )}

            <input
              type="text"
              placeholder="Adres usługi"
              className="estimate-input last-input"
              value={address}
              onChange={(e) => {
                const newAddress = e.target.value;
                setAddress(newAddress);
                addressValid(newAddress);
                          }}
            />
            {!isAddressValid && address.length > 0 && (
              <p className="error-name">Wpisz poprawny adres</p>
            )}

          </div>

          <div className="estimate-form-right-box">
          <div className="estimate-form-box-in-box">
  {/* Lewa kolumna */}
  <div className="estimate-column">
    <p className="estimate-title-box">CO CHCESZ POMALOWAĆ?</p>
    <div className="estimate-form-group">
      <label className="estimate-input-right">
        <input
          type="radio"
          name="wybor1"
          value="dom"
          checked={wybor === "dom"}
          onChange={(e) => setWybor(e.target.value)}
        />
        Dom
      </label>
      <label className="estimate-input-right">
        <input
          type="radio"
          name="wybor1"
          value="mieszkanie"
          checked={wybor === "mieszkanie"}
          onChange={(e) => setWybor(e.target.value)}
        />
        Mieszkanie
      </label>
      <label className="estimate-input-right">
        <input
          type="radio"
          name="wybor1"
          value="lokal"
          checked={wybor === "lokal"}
          onChange={(e) => setWybor(e.target.value)}
        />
        Biuro
      </label>
      <label className="estimate-input-right">
        <input
          type="radio"
          name="wybor1"
          value="inne"
          checked={wybor === "inne"}
          onChange={(e) => setWybor(e.target.value)}
        />
        Inne
      </label>
    </div>
  </div>

  {/* Prawa kolumna */}
  <div className="estimate-column">
    <p className="estimate-title-box">METRARZ?</p>
    <div className="estimate-form-group">
      <label className="estimate-input-right">
        <input
          type="radio"
          name="metrarz1"
          value="15 - 30 m²"
          checked={metrarz1 === "15 - 30 m²"}
          onChange={(e) => setMetrarz1(e.target.value)}
        />
        15 - 30 m²
      </label>
      <label className="estimate-input-right">
        <input
          type="radio"
          name="metrarz1"
          value="30 - 45 m²"
          checked={metrarz1 === "30 - 45 m²"}
          onChange={(e) => setMetrarz1(e.target.value)}
        />
        30 - 45 m²
      </label>
      <label className="estimate-input-right">
        <input
          type="radio"
          name="metrarz1"
          value="45 - 60 m²"
          checked={metrarz1 === "45 - 60 m²"}
          onChange={(e) => setMetrarz1(e.target.value)}
        />
        45 - 60 m²
      </label>
      <label className="estimate-input-right">
        <input
          type="radio"
          name="metrarz1"
          value="60 - 75 m²"
          checked={metrarz1 === "60 - 75 m²"}
          onChange={(e) => setMetrarz1(e.target.value)}
        />
        60 - 75 m²
      </label>
      <label className="estimate-input-right last-input">
        <input
          type="radio"
          name="metrarz1"
          value="75+ m²"
          checked={metrarz1 === "75+ m²"}
          onChange={(e) => setMetrarz1(e.target.value)}
        />
        75+ m²
      </label>
    </div>
  </div>
</div>

            <p className="estimate-title-box">SKĄD SIĘ O NAS DOWIEDZIAŁEŚ?</p>
            <div className="estimate-form-group">
              <label className="estimate-input-right">
                <input
                  
                  type="radio"
                  name="zrodlo"
                  value="polecenie"
                  checked={wybor2 === "polecenie"}
                  onChange={(e) => {setWybor2(e.target.value)
                 }
                  }
                />
                z polecenia
              </label>
              <br />

              <label className="estimate-input-right">
                <input
                  type="radio"
                  name="zrodlo"
                  value="internet"
                  checked={wybor2 === "internet"}
                  onChange={(e) => {setWybor2(e.target.value)
                    }
                  }
                />
                znalazłem Was w Internecie
              </label>
              <br />

              <label className="estimate-input-right">
                <input
                  type="radio"
                  name="zrodlo"
                  value="widzialem"
                  checked={wybor2 === "widzialem"}
                  onChange={(e) => {setWybor2(e.target.value)
                  }
                  }
                />
                widziałem Was podczas pracy
              </label>
            </div>

            <label className="estimate-info">
              <input
                type="checkbox"
                name="zgoda"
                value="check"
                className="checkbox"
                checked={isConsentGiven}
                onChange={(e) => {setIsConsentGiven(e.target.checked)
                    }
                }
              />
              Niniejszym, wyrażam zgodę na gromadzenie i przetwarzanie moich
              danych osobowych przez KolorSystem w celu przesyłania mi na adres
              poczty elektronicznej, oraz numer telefonu informacji
              marketingowych, a także bezpośredniego kontaktu telefonicznego w
              celu marketingowym oraz na profilowanie przez Administratora
              danych moich danych osobowych w celu przedstawienia mi
              zindywidualizowanej oferty, reklamy i promocji. Jednocześnie jestem
              świadomy/a, iż w/w podmioty są administratorami moich danych
              osobowych
            </label>

            <button  type="submit" className="estimate-btn">
              Wyślij
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Estimate;
