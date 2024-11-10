function Tags ({tags}) {
    return (
        <div className="tags">
            {tags.map((tag) => (
                <p className="tags__tag">{tag}</p>
            ))}
        </div>
    )
}

export default Tags