import "../styles/Tags.scss"

function Tags ({tags}) {
    return (
        <div className="tags">
            {tags.map((tag) => (
                <div className="tags__container" key={tag}>
                <p className="tags__tag">{tag}</p>
                </div>
            ))}
        </div>
    )
}

export default Tags