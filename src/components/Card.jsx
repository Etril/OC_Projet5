import "../styles/Card.scss";


function Card({cover, title}) {

    

    return (
        <div>
            <figure className="figure">
            <img src={cover} alt={title} className="card__image"></img>
            <figcaption className="card__title"> {title} </figcaption>
            </figure>
        </div>
    )
}

export default Card