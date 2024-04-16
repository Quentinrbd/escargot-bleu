import "./Header.scss"
import logo from '../../assets/logo.png'
import {NavLink} from 'react-router-dom'
import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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