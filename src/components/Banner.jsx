import "../styles/Banner.scss"

function Banner({image, text}) {
    return (
        <article className="banner">
            <img src={image} alt="Un paysage" className="banner__image"></img>
            <p className="banner__text"> {text} </p>
        </article>
    )
}

export default Banner