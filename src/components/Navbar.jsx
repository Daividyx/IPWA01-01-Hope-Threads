import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6"
import { IoMenu, IoClose } from "react-icons/io5"
import Logo from "../assets/Logo.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

// Die Navbar-Komponente definiert die Navigationsleiste der Anwendung
const Navbar = () => {
  // State für das mobile Navigationsmenü
  const [mobileNav, setMobileNav] = useState(false)

  // Funktion zum Umschalten des mobilen Navigationsmenüs
  const handleNav = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <header className='fixed top-0 z-50 shadow-lg w-full'>
      <nav className='text-black w-full flex justify-between bg-orange-300'>
        {/* Logo und Name der Website */}
        <Link to='/IPWA01-01-Hope-Threads/Start'>
          <div className='flex items-center px-2 lg:px-5 py-2 lg-[350px] w-[260px]'>
            <img className='w-[100px]' src={Logo} alt='Logo' />
            <h1 className='lg:text-2xl px-2 lg:px-7 text-[20px]'>
              Hope Threads
            </h1>
          </div>
        </Link>

        {/* Hauptnavigation */}
        <div className='flex items-center'>
          <li className='hidden md:flex md:list-none md:gap-[15px] lg:gap-[20px]'>
            {/* Links zur Startseite, FAQ und Kontakt */}
            <Link
              className='uppercase text-[13px] lg:text-[16px] xl:text-[18px] hover:font-semibold'
              to='/IPWA01-01-Hope-Threads/Start'
            >
              Start
            </Link>
            <Link
              className='uppercase text-[13px] lg:text-[16px] xl:text-[18px] hover:font-semibold'
              to='/IPWA01-01-Hope-Threads/Faq'
            >
              FAQ
            </Link>
            <Link
              className='uppercase text-[13px] lg:text-[16px] xl:text-[18px] hover:font-semibold'
              to='/IPWA01-01-Hope-Threads/Kontakt'
            >
              Kontakt
            </Link>
          </li>
        </div>

        {/* Social Media Links und Menü-Icon */}
        <div className='flex flex-col justify-center items-end gap-4 mx-5 lg-[350px] w-[260px]'>
          <div className='hidden md:flex md:items-center md:gap-4 md:px-5 mt-5'>
            {/* Social Media Icons */}
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

          {/* Menü-Icon */}
          <div onClick={handleNav} className='md:hidden mx-16'>
            <div>
              {mobileNav ? <IoClose size={30} /> : <IoMenu size={30} />}
            </div>
          </div>

          {/* Spenden-Button */}
          <div className='donateButton pb-3 md:block hidden'>
            <Link to='/IPWA01-01-Hope-Threads/Spenden'>
              <button className='uppercase w-full bg-transparent text-black font-bold py-2 px-4 border border-black hover:border-[3px] rounded'>
                Jetzt Spenden
              </button>
            </Link>
          </div>
        </div>

        {/* Mobiles Navigationsmenü */}
        <div
          className={
            mobileNav
              ? "bg-orange-300 border-r-black border-t-black border-[2px] fixed fixed-col left-[-2px] top-[119px] w-[80%] h-full align-items-center ease-in-out duration-500"
              : "fixed left-[-100%] top-[119px]"
          }
        >
          <ul className='p-4'>
            {/* Links zur Startseite, FAQ, Kontakt und Spenden */}
            <li className='p-4 border-b border-black'>
              <Link className='uppercase' to='/IPWA01-01-Hope-Threads/Start'>
                Start
              </Link>
            </li>
            <li className='p-4 border-b border-black'>
              <Link className='uppercase' to='/IPWA01-01-Hope-Threads/Faq'>
                FAQ
              </Link>
            </li>
            <li className='p-4 border-b border-black'>
              <Link className='uppercase' to='/IPWA01-01-Hope-Threads/Kontakt'>
                Kontakt
              </Link>
            </li>
            <li className='p-4'>
              <Link to='/IPWA01-01-Hope-Threads/Spenden'>
                <button className='uppercase w-full bg-transparent hover:text-2xl text-black font-bold hover:text-black py-2 px-4 border border-black hover:border-[3px] rounded'>
                  Jetzt Spenden
                </button>
              </Link>
            </li>
            {/* Social Media Icons im mobilen Menü */}
            <div className='flex flex-col'>
              <li className='socialIcon flex gap-5 py-3 w-full justify-center'>
                <Link to='https://www.facebook.com/'>
                  <FaFacebook size={30} />
                </Link>
                <Link to='https://twitter.com/'>
                  <FaTwitter size={30} />
                </Link>
                <Link to='https://www.instagram.com/'>
                  <FaInstagram size={30} />
                </Link>
                <Link to='https://de.linkedin.com/'>
                  <FaLinkedin size={30} />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
