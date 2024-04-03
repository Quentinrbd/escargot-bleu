import './Footer.scss'
import {NavLink} from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-content">
            <div className="info">
                <h2>Informations</h2>
                <p>Horaires d'ouvertures <br /> Du lundi au samedi - 11h30/14h | 19h/23h.</p>
                <p>Pour toutes réservations veuillez nous contacter au 06.00.00.00.00 ou remplir le formulaire de contact.</p>
            </div>

            <div className="liens">
                <h2>Liens rapides</h2>
                <NavLink to="/">Accueil</NavLink> <br />
                <NavLink to="/restaurant">Le restaurant</NavLink> <br />
                <NavLink to="/menu">Notre carte</NavLink>
            </div>

            <div className="contact">
                <h2>Nous contacter</h2>

                <form action="">
                    <label htmlFor="">Nom</label>
                    <input type="text" />

                    <label htmlFor="">Adresse mail</label>
                    <input type="email" />

                    <label htmlFor="">Objet</label>
                    <select name="" id="">
                        <option value="">Choisissez un objet</option>
                        <option value="">Réservation</option>
                        <option value="">Carte</option>
                        <option value="">Recrutement</option>
                        <option value="">Autre</option>
                    </select>

                    <label htmlFor="">Message</label>
                    <textarea type="text" />

                    <input type="submit" />
                </form>
                
                                
            </div>
        </div>

        <p id='copyright'>©2024. Tous droits réservés Quentin Ribardière.</p>
    </div>
  )
}