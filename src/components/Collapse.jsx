import { useState } from "react";
import fleche from "../assets/suivant.png"
import "../styles/Collapse.scss"

function Collapse({titre, texte}) {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active);
    }
    
    return (
        <div className="collapse">
            <div className="collapse__menu">
                <p className="collapse__title"> {titre} </p>
                <button onClick={handleClick}> <img src={fleche} alt="Une fleche vers le bas"></img> </button>
            </div>
            {active === true ? 
            <div className="collapse__conteneur">
                <p className="collapse__contenu"> 
                    {texte}
                </p>
            </div> : null}
        </div>
    )
}

export default Collapse