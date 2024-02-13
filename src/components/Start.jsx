import React from "react"
import { Link } from "react-router-dom"
import childrenImage1 from "../assets/child1.jpg"

// Die Start-Komponente stellt die Startseite der Anwendung dar
const Start = () => {
  // Automatisches Scrollen zum Seitenanfang beim Laden der Seite
  window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <div className='mt-[100px]'>
      {/* Abschnitt mit dem Seiteninhalt */}
      <div className='max-w-[1200px] p-[80px] mx-auto text-center'>
        <h1 className='font-semibold text-2xl md:text-4xl lg:text-5xl text-yellow-900'>
          Wir brauchen deine Hilfe <br /> um die Welt besser zu machen
        </h1>
        {/* Link zur Spendenseite */}
        <Link to='/IPWA01-01-Hope-Threads/Spenden'>
          <button className='max-w-[500px] md:text-l lg:text-xl mt-7 uppercase w-full bg-transparent text-black font-bold py-3 px-3 border border-black hover:border-[3px] rounded'>
            Spende jetzt Kleidung
          </button>
        </Link>
      </div>
      {/* Bereich für das Hintergrundbild */}
      <div className='max-w-[1200px] h-[800px] m-auto w-full py-2 px-4'>
        {/* Hintergrundbild */}
        <div
          style={{ backgroundImage: `url(${childrenImage1})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover'
        ></div>
        {/* Keine Pfeile und Navigationspunkte */}
      </div>
    </div>
  )
}

export default Start
