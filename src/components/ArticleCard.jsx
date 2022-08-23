import moment from "moment";
import { Link } from "react-router-dom";

function ArticleCard({
  article_id,
  body,
  comment_count,
  created_at,
  title,
  votes,
}) {
  return (
    <section>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <img src="article image" alt="article_image" />
      <p>{moment(created_at).utc().format("YYYY-MM-DD")}</p>
      <p>{body}</p>
      <button className="comment">Comment:{comment_count}</button>
      <span className="votes">Votes:{votes}</span>
      <button className="upvote">Upvote</button>
    </section>
  );
}

export default ArticleCard;
