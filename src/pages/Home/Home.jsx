import "../../styles/Home.scss";
import { Link } from "react-router-dom";
import proprietes from "../../data/logements.json"
import Banner from "../../components/Banner";
import Card from "../../components/Card";


function Home() {


  return (
      <div className="home">
        <main>
          <Banner />
          <section className="home__cards-container">
            {proprietes.map(({id, title, cover}) => (
              <Link to={`/fiche-logement/${title}`}>
              <div key={id}>
                
                <Card
                title= {title}
                cover= {cover}
                />
              </div>
              </Link>
            ))}
          
          </section>
          </main>
        </div>
  );
}

export default Home;
