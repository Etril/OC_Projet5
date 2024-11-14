import "../styles/Banner.scss"

function Banner({image, text}) {
    return (
        <div className="banner">
            <img src={image} alt="Un paysage" className="banner__image"></img>
            {text ? <h1 className="banner__text"> {text} </h1> : null}
        </div>
    )
}

export default Banner