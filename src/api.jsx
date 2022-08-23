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

export const fetchArticlesByTopics = (topic) => {
  return fetch(
    `https://ostroumova-news.herokuapp.com/api/articles?topic=${topic}`
  ).then((res) => {
    return res.json();
  });
};
