import React from "react"
import Layout from "../components/Layout"
import { useState } from "react"
import { Link } from "react-router-dom"

const Spenden = () => {
  /** Standartmäßig soll Abgabe ausgewählt sein */
  const [abgabe, setAbgabe] = useState(true)
  const [abholung, setAbholung] = useState(false)
  const [vorname, setVorname] = useState("")
  const [nachname, setNachname] = useState("")
  const [strasse, setStrasse] = useState("")
  const [postleitzahl, setPostleitzahl] = useState("")
  const [ort, setOrt] = useState("")
  const [kriesengebiet, setKriesengebiet] = useState("")
  const [kleidungsstück, setKleidungsstück] = useState("")
  const [termin, setTermin] = useState("")
  const [submit, setSubmit] = useState(false)

  const handleAbgabe = () => {
    setAbgabe(true)
    setAbholung(false)
  }
  const handleAbholung = () => {
    setAbgabe(false)
    setAbholung(true)
  }

  const handleSubmit = (e) => {
    // Verhindert das Neuladen der Seite
    e.preventDefault()

    // Überprüfen, ob alle erforderlichen Felder ausgefüllt sind
    if (
      vorname === "" ||
      nachname === "" ||
      // Wenn Abholung ausgewählt ist, müssen auch die zusätzlichen Felder ausgefüllt sein
      (abholung && (strasse === "" || postleitzahl === "" || ort === "")) ||
      kriesengebiet === "" ||
      kleidungsstück === "" ||
      termin === ""
    ) {
      alert("Bitte füllen Sie alle erforderlichen Felder aus.")
      return
    }

    // Überprüfe die Postleitzahl, falls Abholung ausgewählt ist
    if (abholung && !postleitzahl.startsWith("86")) {
      alert(
        "Entschuldigen Sie bitte! Sie wohnen leider zu weit entfernt von unserer Geschäftsstelle. Abholungen können nur in unserem direkten Umfeld erfolgen. PLZ(86xxx)"
      )
      return
    }
    // Wenn alle Prüfungen erfolgreich waren wird submit auf true gesetzt
    setSubmit(true)
  }

  return (
    <Layout>
      <div className='flex mt-[150px] max-w-[1300px] mx-auto mb-[100px]  text-black '>
        {/** Wenn das Forumal Submitted wurde (wenn auf den Button geklickt wird) soll es ausgeblendet werden.
         * An dieser Stelle wird anschließend die Bestätigung angezeigt  */}
        <form
          className={`flex flex-col w-full items-center pt-5 gap-5 ${
            submit ? "hidden" : "block"
          } `}
        >
          <h1 className='text-4xl text-orange-900 font-semibold text-center '>
            Kleiderspende Buchen
          </h1>
          <p className='text-center'>
            <span className='font-semibold '>
              Danke, dass Sie sich entschieden haben zu Spenden!
            </span>
            <br />
            Gerne holen wie ihre Spende bei Ihnen ab wenn Ihr Wohnort in unserem
            direkten Umfeld <span className='font-semibold'>(86xxx)</span>{" "}
            liegt.
          </p>

          <div className='flex flex-col mt-[30px] '>
            {/** Checkbox Abgabe
             *
             */}
            <div className='flex items-center '>
              <input
                id='checkboxAbgabe'
                type='checkbox'
                value=''
                className='w-4 h-4 rounded-full text-black'
                checked={abgabe}
                onChange={handleAbgabe}
              />
              <label
                htmlFor='checkboxAbgabe'
                className='ml-2 text-md font-medium text-black'
              >
                Abgabe an unserer Geschäftsstelle
              </label>
            </div>
            {/** Checkbox Abholung
             *
             */}
            <div className='flex items-center '>
              <input
                id='checkboxAbholung'
                type='checkbox'
                value=''
                className='w-4 h-4 rounded-full text-black'
                checked={abholung}
                onChange={handleAbholung}
              />
              <label
                htmlFor='checkboxAbholung'
                className='ml-2 text-md font-medium text-black'
              >
                Abholung durch einen unserer Mitarbeiter
              </label>
            </div>

            {/**
             * Persönöilche Daten
             *
             *
             */}

            <div className='flex flex-col gap-5 mt-10 '>
              <div className='flex  justify-between'>
                <input
                  id='Vorname'
                  className='p-2 rounded-lg h-[35px] mr-3 w-[160px]'
                  type='text'
                  placeholder='Vorname'
                  value={vorname}
                  onChange={(e) => {
                    setVorname(e.target.value)
                  }}
                />

                <input
                  id='Nachname'
                  className='p-2 rounded-lg h-[35px] w-[160px]'
                  type='text'
                  placeholder='Nachname'
                  value={nachname}
                  onChange={(e) => {
                    setNachname(e.target.value)
                  }}
                />
              </div>
              {/** Adresse
               * Der Container mit Strasse,Postleitzahl und Ort soll nur angezeigt werden, wenn Abholung ausgewählt ist
               *
               */}
              <div
                className={` flex flex-col gap-5  ${
                  abgabe ? "hidden" : "block"
                } `}
              >
                <input
                  id='strasse'
                  className='p-2 rounded-lg h-[35px]'
                  type='text'
                  placeholder='Straße und Hausnummer'
                  value={strasse}
                  onChange={(e) => setStrasse(e.target.value)}
                  required
                />

                <input
                  id='postleitzahl'
                  className='p-2 rounded-lg h-[35px] '
                  type='text'
                  placeholder='Postleitzahl'
                  value={postleitzahl}
                  onChange={(e) => setPostleitzahl(e.target.value)}
                />

                <input
                  id='ort'
                  className='p-2 rounded-lg h-[35px] '
                  type='text'
                  placeholder='Ort'
                  value={ort}
                  onChange={(e) => setOrt(e.target.value)}
                />
              </div>
              {/**Kriesengebiet
               *
               */}
              <label htmlFor='kriesengebiet' className='mb-[-10px]  text-sm'>
                Wähle hier bitte ein Kriesengebiet aus
              </label>
              <select
                className=' border-black border-2 w-full h-[30px] rounded-lg'
                name='kriesengebiet'
                id='kriesengebiet'
                value={kriesengebiet}
                onChange={(e) => setKriesengebiet(e.target.value)}
              >
                <option value=''> Kriesengebiet auswählen</option>
                <option value='Afghanistan'> Afghanistan</option>
                <option value='Jemen'> Jemen</option>
                <option value='Ukraine'> Ukraine</option>
                <option value='Irak'> Irak</option>
              </select>
              {/**Kleidungsstück
               *
               */}
              <label htmlFor='kleidungsstück' className='mb-[-10px]  text-sm'>
                Wähle hier bitte die Art des Kleisungsstückes aus
              </label>
              <select
                className=' border-black border-2 w-full h-[30px] rounded-lg'
                name='kleidungsstück'
                id='kleidungsstück'
                value={kleidungsstück}
                onChange={(e) => setKleidungsstück(e.target.value)}
              >
                <option value=''> Kleidungsstück auswählen</option>
                <option value='T-Shirt'> T-Shirt</option>
                <option value='Hose'> Hose</option>
                <option value='Pullover'> Pullover</option>
                <option value='Jacke'> Jacke</option>
                <option value='Unterwäsche'> Unterwäsche</option>
                <option value='Kopfbedeckung/Schal'>Kopfbedeckung/Schal</option>
              </select>

              {/**Datum & Uhrzeit
               *
               */}
              <div className='flex flex-col gap-[10px]'>
                <label htmlFor='termin'>Bitte wähle einen Termin aus </label>
                <input
                  id='termin'
                  className='p-2 rounded-lg h-[35px] '
                  type='datetime-local'
                  placeholder=''
                  value={termin}
                  onChange={(e) => setTermin(e.target.value)}
                />
              </div>
            </div>
          </div>
          {/** Button ruft beim Clicken die 'handleSubmit' Funktion auf und setzt die Variable 'submit' auf den Wert 'true' */}
          <button
            onClick={handleSubmit}
            className='h-[35px] border-black border-2 rounded-lg w-[200px]'
          >
            Buchen
          </button>
        </form>

        {/** Bestätigung der Buchung
         *    Wird nur angezeogt, wenn 'submit' true ist, also das Formular erfolgreich submitted wurde
         *
         */}
        <div
          className={`flex flex-col gap-5 text-xl items-center mx-auto w-[1300px] ${
            submit ? "block" : "hidden"
          }`}
        >
          <h1 className='text-orange-900 text-4xl font-semibold text-center '>
            Deine Buchung war erfolgreich
          </h1>
          <p className='font-semibold'>
            Hier siehst du noch einmal deine Daten{" "}
          </p>
          <div></div>

          <div className=' flex flex-col gap-3 mt-10 mx-5'>
            {/** Anzeige wenn Abholung gewählt wurde*/}
            <div className={`${abholung ? "block" : "hidden"}`}>
              <p>
                Da du dich für die{" "}
                <span className='font-semibold'>Abholung</span> entschieden hast
                kommen wir ganz unkompliziert zu dir!
              </p>
            </div>
            {/** Anzeige wenn Abgabe gewählt wurde */}
            <div className={`${abgabe ? "block" : "hidden"}`}>
              <p>
                Du hast dich für die{" "}
                <span className='font-semibold'>Abgabe </span> entschieden.
                Freut uns dich bald kennenzulernen!
              </p>
            </div>

            {/** Anzeige der Daten nach erfolgreicher Buchung eines Termins */}
            <div className='flex flex-col gap-3 mt-10 items-center'>
              <p className=' flex justify-between w-[400px] border-b border-black'>
                <span className='  font-semibold'>Vorname:</span> {vorname}
              </p>
              <p className=' flex justify-between w-[400px] border-b border-black'>
                <span className='font-semibold'>Nachname:</span> {nachname}
              </p>
              {/** Dieser Container wird nur angezeigt, wenn Abholung gewählt wurde */}
              <div
                className={` flex flex-col gap-3 ${
                  abholung ? "block" : "hidden"
                }`}
              >
                <p className=' flex justify-between w-[400px] border-b border-black'>
                  <span className='font-semibold'>Strasse:</span> {strasse}
                </p>
                <p className=' flex justify-between w-[400px] border-b border-black'>
                  <span className='font-semibold'>Postleitzahl:</span>{" "}
                  {postleitzahl}
                </p>
                <p className=' flex justify-between w-[400px] border-b border-black'>
                  <span className='font-semibold'>Ort:</span> {ort}
                </p>
              </div>
              <p className=' flex justify-between w-[400px] border-b border-black'>
                <span className='font-semibold'>Kriesengebiet:</span>{" "}
                {kriesengebiet}
              </p>
              <p className=' flex justify-between w-[400px]  border-b border-black'>
                <span className='font-semibold'>Kleidungsstück:</span>{" "}
                {kleidungsstück}
              </p>
              <p className=' flex justify-between w-[400px] border-b border-black'>
                <span className='font-semibold'>Termin:</span> {termin}
              </p>
              <Link to='/Start'>
                <button className=' w-[400px]  mt-5 h-[40px] md:text-l lg:text-xl uppercase bg-transparent text-black font-bold border border-black hover:border-[3px] rounded'>
                  Zurück zur Startseite
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Spenden
