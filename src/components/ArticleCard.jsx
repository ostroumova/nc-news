function ArticleCard( { body, comment_count, created_at, title, votes} ) {
    return (
        <section>
            <h3>{title}</h3>
            <img src="article image" alt="article_image" />
            <p>{created_at}</p>
            <p>{body}</p>
            <button className="comment">Comment:{comment_count}</button>
            <span className="votes">Votes:{votes}</span>
            <button className="upvote">Upvote</button>
        </section>
    )
}

export default ArticleCard;