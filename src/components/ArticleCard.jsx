import moment from "moment";
import { Link } from "react-router-dom";
import Votes from "./Votes";

function ArticleCard({
  article_id,
  comment_count,
  created_at,
  title,
  votes,
  author,
}) {
  return (
    <section className="singleArticle">
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      {/*   <img src={"https://source.unsplash.com/random"} alt={"article_image"} /> */}
      <p>{moment(created_at).utc().format("YYYY-MM-DD")}</p>
      <p>{author}</p>
      <div className="button-container">
        <button className="comment">Comments:{comment_count}</button>
        <div>
          <Votes article_id={article_id} votes={votes} />
        </div>
      </div>
    </section>
  );
}

export default ArticleCard;
