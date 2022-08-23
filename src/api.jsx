//import axios from 'axios';

export const fetchArticles = () => {
  return fetch(" https://ostroumova-news.herokuapp.com/api/articles").then(
    (res) => {
      return res.json();
    }
  );
};

