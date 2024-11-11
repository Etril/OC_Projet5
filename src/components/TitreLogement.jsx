import ".//../styles/TitreLogement.scss"

function TitreLogement({titre, lieu}) {
    return (
        <div className="titre">
            <p className="titre__logement"> {titre} </p>
            <p className="titre__location">  {lieu} </p>
        </div>
    )
}

export default TitreLogement