import ".//../styles/TitreLogement.scss"

function TitreLogement({titre, lieu}) {
    return (
        <div className="titre">
            <h1 className="titre__logement"> {titre} </h1>
            <h2 className="titre__location">  {lieu} </h2>
        </div>
    )
}

export default TitreLogement