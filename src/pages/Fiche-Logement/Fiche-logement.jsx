import { useParams } from "react-router-dom";
import "../../styles/Fiche-logement.scss";
import propriete from "../../data/logements.json";
import Carrousel from "../../components/Carrousel";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import TitreLogement from "../../components/TitreLogement";
import Tags from "../../components/Tags";

function FicheLogement() {
  const { logement } = useParams();
  const proprieteChoisie = propriete.find(
    (propriete) => propriete.title === logement
  );

  return (
    <div>
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
        </section>
      </main>
    </div>
  );
}

export default FicheLogement;
