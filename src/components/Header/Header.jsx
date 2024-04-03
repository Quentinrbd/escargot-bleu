import "./Header.scss"
import logo from '../../assets/logo.png'
import {NavLink} from 'react-router-dom'
import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [mobile, setMobile] = useState(false)

  return (
    <div className="header">
        <div className="logo">
          <NavLink to="/"><img src={logo} alt="logo" id="logo" /></NavLink>
        </div>

        <div>
          <ul id="nav" className={mobile ? '#nav active' : '#nav'}>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/restaurant">Le restaurant</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Notre carte</NavLink>
            </li>
          </ul>          
        </div>

        <div className="mobile">
          <div onClick={() => setMobile(true)} className={mobile ? 'hidden' : 'visible'}>
            <FontAwesomeIcon icon={faBars} size='2xl' />
          </div>

          <div onClick={() => setMobile(false)} className={mobile ? 'visible' : 'hidden'}>
            <FontAwesomeIcon icon={faTimes} size='2xl'/>
          </div>
        </div>
    </div>
  )
}