import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "../../styles/Fiche-logement.scss";
import propriete from "../../data/logements.json";
import Carrousel from "../../components/Carrousel";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import TitreLogement from "../../components/TitreLogement";
import Tags from "../../components/Tags";
import Collapse from "../../components/Collapse";




function FicheLogement() {
  const { logement } = useParams();
 
  const proprieteChoisie = propriete.find(
    (propriete) => propriete.id === logement
  );
  const listeEquipements= proprieteChoisie ? <div> <ul className="collapse__list">{(proprieteChoisie.equipments).map((a) => (
    <li key={a}> {a} </li>
  ))}</ul> </div> : null;



  return (
     
    <div>
      {proprieteChoisie ? 
      <main>
        <div>
          <Carrousel images={proprieteChoisie.pictures} />
        </div>
        <section className="fiche">
            <TitreLogement titre={proprieteChoisie.title} lieu= {proprieteChoisie.location} />
            <Host nom={(proprieteChoisie.host).name} photo={(proprieteChoisie.host).picture}/>
            
                <Tags tags={proprieteChoisie.tags}/>
                <Rate note={proprieteChoisie.rating}/>
            
          
              <Collapse titre= "Description" texte={proprieteChoisie.description} />
              <div className="fiche__equipement">
              <Collapse titre= "Equipement" texte={listeEquipements} />
              </div>
           
        </section>
      </main>
      : <Navigate to="/erreur404" replace />}
    </div>
  );
}

export default FicheLogement;
