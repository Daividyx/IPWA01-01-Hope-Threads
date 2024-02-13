import React from "react"
import Layout from "../components/Layout"

const Kontakt = () => {
  /** Automatisch zum Seitenanfang scrollen wenn die Seite geladen wird */
  window.scrollTo({ top: 0, behavior: "smooth" })
  return (
    <Layout>
      <div className=' m-32 mb-[260px] py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className='mb-20 text-4xl tracking-tight font-extrabold text-center text-orange-900'>
          Schreib uns, wenn du Anregungen oder Fragen hast
        </h2>

        <form action='#' className='space-y-8'>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-orange-900'
            >
              Deine E-Mail
            </label>
            <input
              type='email'
              id='email'
              className='shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
              placeholder='Max.Mustermann@gmail.de'
              required
            />
          </div>
          <div>
            <label
              htmlFor='subject'
              className='block mb-2 text-sm font-medium text-orange-900'
            >
              Betreff
            </label>
            <input
              type='text'
              id='subject'
              className='block p-3 w-full text-black text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500'
              placeholder='Um was gehts?'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-orange-900'
            >
              Deine Nachricht
            </label>
            <textarea
              id='message'
              rows='6'
              className='block p-2.5 w-full text-black text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
              placeholder='Hier kommt deine Nachricht rein'
            ></textarea>
          </div>
          <button className='  w-full md:text-l mt-7 uppercase   bg-transparent  text-black font-bold  py-3 px-3  border border-black hover:border-[3px] rounded'>
            Nachricht absenden
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Kontakt
