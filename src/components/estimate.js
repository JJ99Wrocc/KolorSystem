import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import emailjs from 'emailjs-com';

const Estimate = () => {
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [address, setAddress] = useState("");
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [moreInformation, setMoreInformation] = useState("");
  const [wybor, setWybor] = useState("");
  const [wybor2, setWybor2] = useState("");
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
      moreInformation,
      wybor,
      wybor2,
      isConsentGiven,
      timestamp: new Date(),
    };

    try {
      await addDoc(collection(db, "estimates"), dataToSend);
      alert("Formularz wysłany pomyślnie!");

      // Czyszczenie formularza
      setName("");
      setIsNameValid(false);
      setEmail("");
      setIsEmailValid(false);
      setPhone("");
      setIsPhoneValid(false);
      setAddress("");
      setIsAddressValid(false);
      setMoreInformation("");
      setWybor("");
      setWybor2("");
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
        message: moreInformation,  
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
      <div className="estimate-img">
        <div className="estimate-img-shadow"></div>
        <div className="estimate-title">WYCENA</div>
      </div>

      <div className="ui container estimate-container">
        <p className="estimate-title-p">POWIEDZ NAM CO MAMY POMALOWAĆ</p>
        <hr />
        <div className="estimate-p">
          <div style={{ paddingBottom: "20px" }}>
            W celu otrzymania bezpłatnej, spersonalizowanej wyceny usług
            malarskich, prosimy o wypełnienie poniższego formularza lub kontakt
            telefoniczny w celu umówienia spotkania!!
          </div>
          <p>Dziękujemy za zainteresowanie naszą ofertą :)</p>
        </div>
      </div>

      <div className="container">
        <form className="ui segment estimate-form" onSubmit={handleSubmit}>
          <div className="estimate-form-left-box">
            <p className="estimate-title-box">DANE KONTAKTOWE</p>

            <input
              type="text"
              placeholder="Imię i nazwisko/ nazwa firmy"
              className="estimate-input"
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
              className="estimate-input"
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

            <input
              type="text"
              placeholder="Powiedz nam coś więcej o Twojej nieruchomości"
              className="estimate-input last-input"
              value={moreInformation}
              onChange={(e) => {setMoreInformation(e.target.value)
                          }
                         } />
          </div>

          <div className="estimate-form-right-box">
            <p className="estimate-title-box">CO CHCESZ POMALOWAĆ?</p>
            <div className="estimate-form-right1">
              <label className="estimate-input-right">
                <input
                  type="radio"
                  name="wybor"
                  value="dom"
                  checked={wybor === "dom"}
                  onChange={(e) => {setWybor(e.target.value)
                    }
                  }
                />
                Dom
              </label>
              <br />

              <label className="estimate-input-right">
                <input
                  type="radio"
                  name="wybor"
                  value="mieszkanie"
                  checked={wybor === "mieszkanie"}
                  onChange={(e) => {setWybor(e.target.value)
                    }
                  }
                />
                Mieszkanie
              </label>
              <br />

              <label className="estimate-input-right">
                <input
                  type="radio"
                  name="wybor"
                  value="lokal"
                  checked={wybor === "lokal"}
                  onChange={(e) => {setWybor(e.target.value)
                    }
                  }
                />
                Lokal usługowy/ użytkowy
              </label>
              <br />

              <label className="estimate-input-right">
                <input
                  type="radio"
                  name="wybor"
                  value="inne"
                  checked={wybor === "inne"}
                  onChange={(e) => {setWybor(e.target.value)
                    }
                  }
                />
                Inne
              </label>
            </div>

            <p className="pp">Skąd się o nas dowiedziałeś?</p>
            <div>
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
