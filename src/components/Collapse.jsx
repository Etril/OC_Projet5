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
                <h3 className="collapse__title"> {titre} </h3>
                <button onClick={handleClick}> <img src={fleche} alt="Une fleche vers le bas" className={active ? "show" : "hide"}></img> </button>
            </div> 
            <div className={`collapse__conteneur collapse__conteneur--${active ? "show" : "hide"}`} >
                <div className="collapse__contenu"> 
                    {texte}
                </div>
            </div>
        </div>
    )
}

export default Collapse