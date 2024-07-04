import { useLayoutEffect, useState } from "react"

import { useTheme } from "../../contexts/theme"
import { CloseIcon } from "../icons/CloseIcon"
import { MenuIcon } from "../icons/MenuIcon"
import { MoonIcon } from "../icons/MoonIcon"
import { SunIcon } from "../icons/SunIcon"

import "./navbar.css"

const Navbar = () => {
  const { themeName, toggleTheme } = useTheme()
  const [isShow, setIsShow] = useState(false)

  useLayoutEffect(() => {
    document.body.style.overflow = isShow ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isShow])

  const toggleNavList = () => {
    const showNav = window.innerWidth <= 600 ? !isShow : isShow
    setIsShow(showNav)
  }

  return (
    <nav className="center nav">
      <ul style={{ display: isShow ? "flex" : undefined }} className="nav__list">
        <li className="nav__list-item">
          <a href="#projects" onClick={toggleNavList} className="link link--nav">
            Projects
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#skills" onClick={toggleNavList} className="link link--nav">
            Skills
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#contact" onClick={toggleNavList} className="link link--nav">
            Contact
          </a>
        </li>
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === "dark" ? (
          <SunIcon width={30} height={30} className="nav__list-icon" />
        ) : (
          <MoonIcon width={30} height={30} className="nav__list-icon" />
        )}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {isShow ? <CloseIcon width={30} height={30} /> : <MenuIcon width={30} height={30} />}
      </button>
    </nav>
  )
}

export default Navbar
