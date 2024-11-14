import "../styles/variables.scss";
import "../styles/Host.scss";

function Host({ nom, photo }) {
  const noms = nom.split(" ");

  return (
    <div className="host">
        <div className="host__container"> {noms.map((a) => (
        <p className="host__name" key={a}> {a} </p>
      ))} </div>
      <img className="host__image" src={photo} alt={`de ${nom}`}></img>
    </div>
  );
}

export default Host;
