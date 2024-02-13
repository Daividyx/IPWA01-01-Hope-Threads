import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Importieren der erforderlichen Seiten
import Startseite from "./pages/Startseite.jsx"
import Faq from "./pages/Faq.jsx"
import Datenschutz from "./pages/Datenschutz.jsx"
import Kontakt from "./pages/Kontakt.jsx"
import Spenden from "./pages/Spenden.jsx"
import Agb from "./pages/Agb.jsx"
import Impressum from "./pages/Impressum.jsx"

//Routenobjekte zu den verschiedenen Seiten erstellen
const router = createBrowserRouter(
  [
    { path: "/", element: <Startseite /> },
    { path: "/Start", element: <Startseite /> },
    { path: "/Datenschutz", element: <Datenschutz /> },
    { path: "/Faq", element: <Faq /> },
    { path: "/Kontakt", element: <Kontakt /> },
    { path: "/Spenden", element: <Spenden /> },
    { path: "/Agb", element: <Agb /> },
    { path: "/Impressum", element: <Impressum /> },
  ],
  {
    basename: "/IPWA01-01-Hope-Threads",
  }
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
