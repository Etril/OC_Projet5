import fleche from "../assets/suivant.png"
import "../styles/Equipement.scss"
import { useState } from "react"

function Description({equipements}) {

    const [active, setActive] = useState(false);


    function handleClick() {
        setActive(!active);
    }

    return (
        <div className="equipement">
            <div className="equipement__menu">
                <p className="equipement__title"> Equipement </p>
                <button onClick={handleClick}> <img src={fleche} alt="Une fleche vers le bas"></img> </button>
            </div>
            {active === true ? 
            <div className="equipement__conteneur">
                <ul>
                    {equipements.map((equipement)=> (
                        <li className="equipement__contenu"> {equipement} </li>
                    ))} 
                    
                </ul>
            </div> : null}
        </div>
    )
}

export default Description 