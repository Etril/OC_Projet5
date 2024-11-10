import { useParams } from "react-router-dom"
import "../../styles/Fiche-logement.scss"
import propriete from "../../data/logements.json"
import Carrousel from "../../components/Carrousel";

function FicheLogement() {
    const {logement} = useParams();
    const proprieteChoisie = propriete.find((propriete) => propriete.title === logement)

    return (
        <div>
            <main>
             <Carrousel
             images= {proprieteChoisie.pictures} />
             </main>
        </div>
    )
}

export default FicheLogement