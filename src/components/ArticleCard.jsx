import moment from "moment";
import { Link } from "react-router-dom";
import Votes from "./Votes";

function ArticleCard({ article_id, comment_count, created_at, title, votes }) {
  return (
    <section className="singleArticle">
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <img src={"article image"} alt={"article_image"} />
      <p>{moment(created_at).utc().format("YYYY-MM-DD")}</p>

      <button className="comment">Comments:{comment_count}</button>
      <span className="votes">Votes:{votes}</span>
      <Votes article_id={article_id} votes={votes} />
    </section>
  );
}

export default ArticleCard;
