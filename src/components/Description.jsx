import { useState } from "react";
import fleche from "../assets/suivant.png"
import "../styles/Description.scss"

function Description({description}) {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active);
    }
    
    return (
        <div className="description">
            <div className="description__menu">
                <p className="description__title"> Description </p>
                <button onClick={handleClick}> <img src={fleche} alt="Une fleche vers le bas"></img> </button>
            </div>
            {active === true ? 
            <div className="description__conteneur">
                <p className="description__contenu"> 
                    {description}
                </p>
            </div> : null}
        </div>
    )
}

export default Description 