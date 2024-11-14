import { Link } from "react-router-dom"
import "../../styles/Erreur.scss"

function Erreur() {
    return (
        <main className="erreur"> 
            <article> 
                <p className="erreur__number"> 404 </p>
                <p className="erreur__text"> Oups! La page que vous demandez n'existe pas. </p>
            <Link to="/" className="erreur__lien"> Retourner sur la page d'accueil </Link>
            </article>
        </main>
    )
}

export default Erreur