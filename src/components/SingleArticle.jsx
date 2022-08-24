import { useEffect } from "react";
import { useParams } from "react-router";
import { fetchArticleById } from "../api";
import moment from "moment";
import { useState } from "react";
import Votes from "./Votes";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then((res) => {
      setSingleArticle(res.data.article);
    });
  }, [article_id]);

  return (
    <section className="singleArticle">
      <h3>{singleArticle.title}</h3>
      <img src={"article image"} alt={"article_image"} />
      <p>{moment(singleArticle.created_at).utc().format("YYYY-MM-DD")}</p>
      <p>{singleArticle.body}</p>
      <button className="comment">Comment:{singleArticle.comment_count}</button>
      <Votes article_id={article_id} votes={singleArticle.votes} />
    </section>
  );
};

export default SingleArticle;
