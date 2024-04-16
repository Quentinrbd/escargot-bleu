import "./Header.scss"
import logo from '../../assets/logo.png'
import {NavLink} from 'react-router-dom'
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="navbar">
      <img src={logo} alt="" className="nav-logo" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/restaurant">Le restaurant</NavLink>
        <NavLink to="/menu">Notre carte</NavLink>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  )
}