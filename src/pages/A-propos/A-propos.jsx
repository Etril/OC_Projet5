import "../../styles/Apropos.scss"
import infos from "../../data/apropos.json"
import image from "../../assets/banner_2.png"
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"



function APropos() {
    return (
    <main className="about">
        <Banner image={image} text={null} />
        <section className="about__menus">
            {infos.map(({id, valeur, texte })=>
            <div key={id}>
                <Collapse titre={valeur} texte={texte} />
            </div>)}
        </section>
    </main> 
    )
}

export default APropos 