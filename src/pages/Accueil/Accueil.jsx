import './Accueil.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import imgHome from '../../assets/home.jpg'
import imgResto from '../../assets/restaurant.jpg'
import imgCuisine from '../../assets/cuisine.jpg'
import {NavLink} from 'react-router-dom'
import { motion } from "framer-motion"
import {scrollTop} from "../../hooks/scrollTop"

export default function Accueil() {
  scrollTop(0,0)
  return (
    <>
      <Header/>

      <div className="home">
        <div className="landing-page">
          <div className="home-content">
            <motion.div
            initial={{y:300, scale:0.6}}
            animate={{y:0, scale: 1}}
            transition={{ duration: 0.4 }}
            >
              <h1>L'Escargot Bleu</h1>
            </motion.div>
            <motion.div
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{duration:0.3, delay:0.6}}>
              <p>Le bistrot français par excellence.</p>
            </motion.div>
          </div>
          
          <img src={imgHome} alt="home image" id='home' />


          <NavLink to='/' id='res'>Venez vous régaler !</NavLink>
        </div>

        <div className="bottom-home">
          <div className="escargot">
            <div className="escargot-content">
              <h1>L'Escargot Bleu</h1>
              <p>
                L'Escargot Bleu est un bistrot français où règne bon vivre et bonne humeur à toute heure de la journée. </p>
                <p>Nous proposons toute sorte de plats variés pour que tout le monde y trouve son bonheur.</p>
            </div>
            <motion.div
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration: 0.5}}>
              <img src={imgResto} alt="" id='resto' />
            </motion.div>
          </div>

          <div className="cuisine">
            <motion.div
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration: 0.5}}>
              <img src={imgCuisine} alt="" id='cuisine' />
            </motion.div>
            <div className="cuisine-content">
              <h1>Notre cuisine</h1>
              <p>Chez nous, la cuisine n'est pas simplement une question de nourriture, c'est une expérience authentique, ancrée dans notre engagement envers la qualité et la durabilité. Notre philosophie culinaire repose sur un principe fondamental : privilégier les produits frais et locaux à chaque étape de la préparation.</p>
            </div>
          </div>

          <div className="cuisine-phone">
            <div className="cuisine-content">
              <h1>Notre cuisine</h1>
              <p>Chez nous, la cuisine n'est pas simplement une question de nourriture, c'est une expérience authentique, ancrée dans notre engagement envers la qualité et la durabilité. Notre philosophie culinaire repose sur un principe fondamental : privilégier les produits frais et locaux à chaque étape de la préparation.</p>
            </div>
            <motion.div
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration: 0.5}}>
              <img src={imgCuisine} alt="" id='cuisine' />
            </motion.div>
          </div>
        </div>    
      </div>

      <Footer/>
    </>
  )
}
