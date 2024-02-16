import React from "react"
import image1 from "../assets/childrenCamera.jpg"
import { Link } from "react-router-dom"

// Die Mission-Komponente definiert den Abschnitt "Unsere Mission" der Anwendung
const Mission = () => {
  return (
    <div className='flex flex-col mt-[80px] px-[50px] items-center mb-[50px]'>
      {/* Überschrift "Unsere Mission" */}
      <h1 className='text-yellow-900 text-3xl md:text-4xl lg:text-5xl font-semibold'>
        Unsere Mission
      </h1>
      {/* Grid-Layout für die Anzeige von Text und Bild */}
      <div className='mt-[40px] grid lg:grid-cols-2'>
        {/* Abschnitt mit Textinhalt */}
        <div className='px-[50px] flex items-center'>
          <p className='text-[15px] md:text-xl font-semibold'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            suscipit debitis explicabo, quidem alias odit ducimus, sapiente
            aliquam nemo rerum tempora. Qui minus soluta et, tenetur voluptatum
            doloremque nesciunt labore! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis aspernatur consectetur debitis magnam
            est, mollitia exercitationem a maxime distinctio reiciendis deleniti
            ut. Recusandae culpa non libero obcaecati mollitia cupiditate rerum.
          </p>
        </div>
        {/* Bild */}
        <div>
          <img className='mt-[100px] rounded-2xl' src={image1} alt='' />
          {/* Quellenangabe des Bildes */}
          <p className='text-end mr-3 mt-2'>
            Quelle: Pexels von {""}
            <Link className='font-semibold ' to=' https://pixabay.com'>
              Pixabay
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mission
