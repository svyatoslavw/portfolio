import React from "react"
import ReactDOM from "react-dom/client"

import { Footer } from "./components/Footer/Footer.tsx"
import { Header } from "./components/Header/Header.tsx"
import "./i18.ts"
import { Page } from "./page.tsx"
import "./styles/index.scss"

window.onload = () => {
  history.replaceState({}, document.title, window.location.pathname)
  window.scrollTo(0, 0)
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Page />
    <Footer />
  </React.StrictMode>
)
