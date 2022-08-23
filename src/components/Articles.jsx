import ArticleCard from "./ArticleCard";
import {useState, useEffect, useContext} from 'react'
import { fetchArticles } from "../api";
import {postComment} from "../api";

function Articles() {
    const [articles, setArticles] = useState([])
    
  

useEffect(() => {
    fetchArticles().then(({articles}) => {
        setArticles(articles);
    })
}, [])

  return (
    <main>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </main>
  );
}

export default Articles;
