import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

// Komponente Layout definiert das grundlegende Layout der Anwendung

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Navbar-Komponente, die die Navigationsleiste der Anwendung enthält */}
      <Navbar />
      {/* Hauptinhalt der Anwendung, der durch die children-Props übergeben wird */}
      <main className='flex-1'>{children}</main>
      {/* Footer-Komponente, die den Footer-Bereich der Anwendung enthält */}
      <Footer className='mt-auto' />
    </div>
  )
}

export default Layout
