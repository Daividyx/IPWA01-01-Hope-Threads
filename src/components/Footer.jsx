import React from "react"
import { Link } from "react-router-dom"
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6"

const Footer = () => {
  // Aktuelles Jahr extrahieren
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      {/** Footer-Navigation */}
      <nav className='w-full bg-orange-300 flex justify-between'>
        {/** Bereich für Anschrift und Copyright */}
        <div className='w-[500px]'>
          <div className='font-semibold flex flex-row gap-5 items-center py-5 px-5 text-sm md:text-md'>
            {/** Anschrift und Copyright mit aktuellem Jahr */}
            <div className='flex flex-col items-center'>
              <p>&copy; {currentYear} Hope Threads</p>
              <br />
              <p>Hope Thread E.v</p>
              <p>MusterStr. 97</p>
              <p>86xxx Musterort</p>
            </div>
            {/** Kontaktdaten */}
            <div className='flex flex-col justify-center gap-3 px-5'>
              <span className='flex gap-3 border-b-1 border-black justify-center'>
                <FaPhone size={20} />
                <p>+49xxx xxxxxxx</p>
              </span>
              <span className='flex gap-3 border-b-2 border-black justify-center'>
                <FaEnvelope size={20} />
                <p>info@hope-threads.xx</p>
              </span>
            </div>
          </div>
        </div>
        {/** Bereich für Footer-Navigation und Social Links */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 md:mr-10'>
          {/** Links zu Impressum, Datenschutz und AGB */}
          <Link to='/Impressum'>Impressum</Link>
          <Link to='/Datenschutz'>Datenschutz</Link>
          <Link to='/Agb'>AGB</Link>
        </div>
        {/** Social Media Links */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-4 mx-5'>
          <Link className='socialIcon' to='https://www.facebook.com/'>
            <FaFacebook />
          </Link>
          <Link className='socialIcon' to='https://twitter.com/'>
            <FaTwitter />
          </Link>
          <Link className='socialIcon' to='https://www.instagram.com/'>
            <FaInstagram />
          </Link>
          <Link className='socialIcon' to='https://de.linkedin.com/'>
            <FaLinkedin />
          </Link>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
