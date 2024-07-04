import React, { ReactNode, createContext, useEffect, useState } from "react"

interface ThemeContextProps {
  themeName: string
  toggleTheme: () => void
}

export const useTheme = () => React.useContext(ThemeContext)

const ThemeContext = createContext<ThemeContextProps>({ themeName: "light", toggleTheme: () => {} })

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<string>("light")

  const changeTheme = (e: MediaQueryListEvent) => {
    setThemeName(e.matches ? "dark" : "light")
  }

  const toggleTheme = () => {
    setThemeName((prevThemeName) => (prevThemeName === "dark" ? "light" : "dark"))
    console.log("@@@", themeName)
  }

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    setThemeName(darkMediaQuery.matches ? "dark" : "light")

    darkMediaQuery.addEventListener("change", changeTheme)

    return () => darkMediaQuery.removeEventListener("change", changeTheme)
  }, [])

  useEffect(() => {
    const color = themeName === "dark" ? "var(--clr-dark)" : "var(--clr-light)"
    document.body.style.backgroundColor = color

    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [themeName])

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}
