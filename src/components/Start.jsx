import React from "react"
import { Link } from "react-router-dom"
import childrenImage1 from "../assets/child1.jpg"

// Die Start-Komponente stellt die Startseite der Anwendung dar
const Start = () => {
  // Automatisches Scrollen zum Seitenanfang beim Laden der Seite
  window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <div className='mt-[100px] flex flex-col'>
      {/* Abschnitt mit dem Seiteninhalt */}
      <div className='max-w-[1200px] mt-[80px] mb-[40px] lg:mb-[80px] mx-auto text-center'>
        <h1 className='font-semibold text-xl md:text-4xl lg:text-5xl text-yellow-900'>
          Wir brauchen deine Hilfe <br /> um die Welt besser zu machen
        </h1>
        {/* Link zur Spendenseite */}
        <Link to='/Spenden'>
          <button className='max-w-[500px] md:text-l lg:text-xl mt-7 uppercase w-full bg-transparent text-black font-bold py-3 px-3 border border-black hover:border-[3px] rounded'>
            Spende jetzt Kleidung
          </button>
        </Link>
      </div>
      {/* Bild*/}
      <div className='max-w-[1200px] h-[800px] m-auto w-full py-2 px-4   '>
        <img
          className=' w-full h-full object-cover object-center rounded-2xl'
          src={childrenImage1}
          alt=''
        />
        {/* Quellenangabe des Bildes */}
        <p className='text-start text-black ml-3 mt-2'>
          Quelle: JeanetteAtherton von {""}
          <Link className='font-semibold' to='https://pixabay.com/'>
            Pixabay
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Start
