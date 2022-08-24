import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { useParams } from "react-router";

function Articles() {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    fetchArticles(topic).then(({ articles }) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <main>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </main>
  );
}

export default Articles;
