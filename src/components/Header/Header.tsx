import Navbar from "../Navbar/Navbar"

import "./header.css"

const Header = () => {
  return (
    <header className="header center">
      <h3 className="logo heading-text">
        <a href={"/"} className="link">
          <img src="./logo.svg" alt="logo" width={48} height={48} />
        </a>
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
