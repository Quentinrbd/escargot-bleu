import './Carte.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {scrollTop} from "../../hooks/scrollTop"

export default function Menu() {
  scrollTop(0,0)
  return (
    <>
        <Header/>

        <h1 id='title'>Notre carte</h1>

        <div className="carte">
          <div className="boisson">
            <h2>Nos boissons</h2>
            <h3>Boissons non alcoolisées</h3>
              <div className='prop'>
                <span>Coca-Cola</span>
                <span>3€</span>
              </div>
              <div className='prop'>
                <span>Coca-Cola Zéro</span>
                <span>2.50€</span>
              </div>
              <div className='prop'>
                <span>Ice Tea</span>
                <span>2€</span>
              </div>
              <div className='prop'>
                <span>Fanta</span>
                <span>2€</span>
              </div>
              <div className='prop'>
                <span>Diabolo</span>
                <span>1.25€</span>
              </div>
            <h4>Boissons chaudes</h4>
            <div className='prop'>
                <span>Café allongé</span>
                <span>1.25€</span>
              </div>
              <div className='prop'>
                <span>Espresso</span>
                <span>1.5€</span>
              </div>
              <div className='prop'>
                <span>Café au lait</span>
                <span>2€</span>
              </div>
              <div className='prop'>
                <span>Chocolat chaud</span>
                <span>1.50€</span>
              </div>
            <h3>Vins</h3>
            <div className='prop'>
                <span>Le Beaujolais</span>
                <span>38€</span>
              </div>
              <div className='prop'>
                <span>Le Bourgogne rouge</span>
                <span>50€</span>
              </div>
              <div className='prop'>
                <span>La Vallée du Rhône</span>
                <span>35€</span>
              </div>
              <div className='prop'>
                <span>Le Bordeaux</span>
                <span>58€</span>
              </div>
            <h3>Alcools</h3>
              <h4>Cocktails</h4>
              <div className='prop'>
                <span>Kir maison - 12cl</span>
                <span>8€</span>
              </div>
              <div className='prop'>
                <span>Spritz</span>
                <span>8€</span>
              </div>
              <div className='prop'>
                <span>Mojito</span>
                <span>8.5€</span>
              </div>
              <div className='prop'>
                <span>Apéritif maison <span className='detail'>(rhum blanc, jus de citron vert, jus d'abricot)</span></span>
                <span>9.25€</span>
              </div>
            <h3>Digestifs</h3>
            <div className='prop'>
                <span>Amaretto - 4cl</span>
                <span>10€</span>
            </div>
            <div className='prop'>
                <span>Cognac - 4cl</span>
                <span>11€</span>
            </div>
            <div className='prop'>
                <span>Eau de vie Poire - 4cl</span>
                <span>11.5€</span>
            </div>
          </div>

          <div className="menu">
            <h2>Notre menu</h2>
            <h3>Entrées</h3>
            <div className='prop'>
                <span>L'Escargot Bleu</span>
                <span>8.5€</span>
            </div>
            <div className='prop'>
                <span>Foie gras de canard</span>
                <span>12.5€</span>
            </div>
            <div className='prop'>
                <span>Salade de saison <span className='detail'>Betteraves, mousse de chèvre frais, figues AOP</span></span>
                <span>8.5€</span>
            </div>
            <div className='prop'>
                <span>Oeuf mayo</span>
                <span>2.5€</span>
            </div>

            <h3>Plats</h3>
            <div className='prop'>
                <span>Le Croque-Monsieur</span>
                <span>10€</span>
            </div>
            <div className='prop'>
                <span> Le Tartare</span>
                <span>13.5€</span>
            </div>
            <div className='prop'>
                <span>L'Entrecôte</span>
                <span>16€</span>
            </div>
            <div className='prop'>
                <span>Le Burger <span className='detail'>Bun maison, steack, cheddar, oignon rouge, sauce maison</span></span>
                <span>13.5€</span>
            </div>
            <div className='prop'>
                <span>Le Burger Végan <span className='detail'>Bun maison, steack végétal, galette de pomme de terre, oignon rouge, sauce maison</span></span>
                <span>14€</span>
            </div>

            <h3>Desserts</h3>
            <div className='prop'>
                <span>Dame Blanche</span>
                <span>6€</span>
            </div>
            <div className='prop'>
                <span>Coupe Fruitée <span className='detail'>1 boule framboise, 1 boule fraise, 1 boule cassis, créme fouettée</span></span>
                <span>7.5€</span>
            </div>
            <div className='prop'>
                <span>Gâteau au chocolat</span>
                <span>7€</span>
            </div>
            <div className='prop'>
                <span>Mille-feuille</span>
                <span>8.5€</span>
            </div>
          </div>
        </div>

        <Footer/>
    </>
  )
}