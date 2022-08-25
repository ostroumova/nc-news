import { useEffect } from "react";
import { useParams } from "react-router";
import { fetchArticleById } from "../api";
import moment from "moment";
import { useState } from "react";
import Votes from "./Votes";
import Comments from "./Comments";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const { article_id } = useParams();
  //const [commentsClicked, setComments] = useState(false);

  useEffect(() => {
    fetchArticleById(article_id).then((res) => {
      setSingleArticle(res.data.article);
    });
  }, [article_id]);

  return (
    <section className="singleArticle">
      <h3>{singleArticle.title}</h3>
      <img src={"https://source.unsplash.com/random"} alt={"article_image"} />
      <p>{moment(singleArticle.created_at).utc().format("YYYY-MM-DD")}</p>
      <p>{singleArticle.body}</p>
      <p className="author">Author: {singleArticle.author}</p>
      <Comments article_id={article_id} />
      <div className="button-container">
        <button onClick={() => {}} className="comment">
          Comments:{singleArticle.comment_count}
        </button>
        <Votes article_id={article_id} votes={singleArticle.votes} />
      </div>
    </section>
  );
};

export default SingleArticle;
