import { useParams } from "react-router-dom";
import "../../styles/Fiche-logement.scss";
import propriete from "../../data/logements.json";
import Carrousel from "../../components/Carrousel";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import TitreLogement from "../../components/TitreLogement";
import Tags from "../../components/Tags";
import Collapse from "../../components/Collapse";
import Erreur from "../Erreur/Erreur";



function FicheLogement() {
  const { logement } = useParams();
  const proprieteChoisie = propriete.find(
    (propriete) => propriete.title === logement
  );
  const listeEquipements= proprieteChoisie ? <ul className="collapse__list">{(proprieteChoisie.equipments).map((a) => (
    <li key={a}> {a} </li>
  ))}</ul> : null;



  return (
     
    <div>
      {proprieteChoisie ? 
      <main>
        <article>
          <Carrousel images={proprieteChoisie.pictures} />
        </article>
        <section className="fiche">
            <div className="fiche__titrehost">
            <TitreLogement titre={proprieteChoisie.title} lieu= {proprieteChoisie.location} />
            <Host nom={(proprieteChoisie.host).name} photo={(proprieteChoisie.host).picture}/>
            </div>
            <div className="fiche__tagrate">
                <Tags tags={proprieteChoisie.tags}/>
                <Rate note={proprieteChoisie.rating}/>
            </div>
            <div className="fiche__menus">
              <Collapse titre= "Description" texte={proprieteChoisie.description} />
              <Collapse titre= "Equipement" texte={listeEquipements} />
            </div>
        </section>
      </main>
      : <Erreur />}
    </div>
  );
}

export default FicheLogement;
