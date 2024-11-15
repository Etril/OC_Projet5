import "../../styles/Home.scss";
import image from "../../assets/banner.png";
import { Link } from "react-router-dom";
import proprietes from "../../data/logements.json";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

function Home() {
  const text = "Chez vous, partout et ailleurs";

  return (
    <main className="home">
      <Banner text={text} image={image} />
      <div className="home__cards-container">
        {proprietes.map(({ id, title, cover }) => (
          <div key={id}>
            <Link to={`/fiche-logement/${id}`}>
              <Card title={title} cover={cover} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
