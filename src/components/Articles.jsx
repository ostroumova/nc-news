import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { useParams } from "react-router";

function Articles() {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();
  const [sortedField, setSortedField] = useState(null);
  const [orderField, setOrderField] = useState(null);
  const [isCatchError, setCatchError] = useState(false);

  useEffect(() => {
    fetchArticles(topic, sortedField, orderField)
      .catch(() => {
        setCatchError(true);
      })
      .then(({ articles }) => {
        setArticles(articles);
      });
  }, [topic, sortedField, orderField]);

  const handleChange = (event) => {
    setSortedField(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrderField(event.target.value);
  };

  if (isCatchError === true) {
    return (
      <div className="errorMessage">
        <p>Something went wrong. Please check and try again!</p>
      </div>
    );
  }

  return (
    <main>
      <select className="block" onChange={handleChange}>
        <option label="Sort by">Sort by</option>
        <option value="article_id">Article_id</option>
        <option value="author">Author</option>
        <option value="created_at">Date</option>
        <option value="title">Title</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
      </select>
      <select className="block_order_by" onChange={handleOrderChange}>
        <option label="Order by">Order by</option>
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
      ;
    </main>
  );
}

export default Articles;
