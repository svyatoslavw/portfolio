import React from "react"
import ReactDOM from "react-dom/client"

import { ThemeProvider } from "./contexts/theme"
import "./index.css"
import Page from "./page"

window.onload = () => {
  history.replaceState({}, document.title, window.location.pathname)
  window.scrollTo(0, 0)
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  </React.StrictMode>
)
