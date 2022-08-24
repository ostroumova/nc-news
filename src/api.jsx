import axios from "axios";

export const fetchArticles = (topic) => {
  return axios
    .get("https://ostroumova-news.herokuapp.com/api/articles", {
      params: { topic: topic },
    })
    .then((res) => {
      return res.data;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://ostroumova-news.herokuapp.com/api/topics")
    .then((res) => {
      return res.data;
    });
};

export const fetchArticleById = (article_id) => {
  return axios.get(
    `https://ostroumova-news.herokuapp.com/api/articles/${article_id}`
  );
};
