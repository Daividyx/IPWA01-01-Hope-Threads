import React from "react"
import { Link } from "react-router-dom"

// Die Newsletter-Komponente stellt das Newsletter-Formular dar
const Newsletter = () => {
  return (
    <div className='w-full py-16 text-black px-4'>
      {/* Grid-Layout für das Newsletter-Formular */}
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        {/* Bereich für den Text und die Beschreibung des Newsletters */}
        <div className='lg:col-span-2 my-4'>
          <h1 className='text-orange-900 md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>
            Du möchtest nichts mehr Verpassen?
          </h1>
          <p className='py-3 text-center'>
            Melde dich zu unserem kostenfreien Newsletter an und bleibe auf dem
            Laufenden!
          </p>
        </div>
        {/* Bereich für das Eingabefeld und den Abonnieren-Button */}
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Email Adresse'
            />
            {/* Button zum Abonnieren des Newsletters */}
            <button className='uppercase bg-orange-900 text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Abbonieren
            </button>
          </div>
          {/* Hinweis zum Datenschutz */}
          <p>
            Wir behandeln deine Daten sorgfältig. Schaue für mehr Infos beim
            <Link
              to='/Datenschutz'
              className='text-orange-900 font-semibold px-1'
            >
              Datenschutz
            </Link>
            vorbei.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
