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
const router = createBrowserRouter([
  {
    path: "/IPWA01-01-Hope-Threads/",
    element: <Startseite />,
  },
  {
    path: "/IPWA01-01-Hope-Threads/Start",
    element: <Startseite />,
  },

  {
    path: "/IPWA01-01-Hope-Threads/Datenschutz",
    element: <Datenschutz />,
  },

  {
    path: "/IPWA01-01-Hope-Threads/Faq",
    element: <Faq />,
  },

  {
    path: "/IPWA01-01-Hope-Threads/Kontakt",
    element: <Kontakt />,
  },

  {
    path: "/IPWA01-01-Hope-Threads/Spenden",
    element: <Spenden />,
  },

  {
    path: "/IPWA01-01-Hope-Threads/Agb",
    element: <Agb />,
  },

  {
    path: "/IPWA01-01-Hope-Threads/Impressum",
    element: <Impressum />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
