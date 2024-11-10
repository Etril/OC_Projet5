function Host({nom, photo}) {
    return (
        <div className="host">
            <p className="hostName"> {nom} </p>
            <img src={photo} alt={`Photo de ${nom}`}></img>
        </div>
    )
}

export default Host