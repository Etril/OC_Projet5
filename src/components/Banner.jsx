import banner from "../assets/banner.png"
import "../styles/Banner.scss"

function Banner() {
    return (
        <article className="banner">
            <img src={banner} alt="Une plage rocailleuse" className="banner__image"></img>
            <p className="banner__text"> Chez vous, partout et ailleurs </p>
        </article>
    )
}

export default Banner