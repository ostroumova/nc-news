import axios from "axios";

export const fetchArticles = (topic, sort_by, order) => {
  return axios
    .get("https://ostroumova-news.herokuapp.com/api/articles", {
      params: { topic: topic, sort_by: sort_by, order: order },
    })
    .then((res) => {
      console.log(res.data);

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

export const updateArticle = (article_id) => {
  return axios.patch(
    `https://ostroumova-news.herokuapp.com/api/articles/${article_id}`,
    {
      inc_votes: 1,
    }
  );
};

export const decreaseArticle = (article_id) => {
  return axios.patch(
    `https://ostroumova-news.herokuapp.com/api/articles/${article_id}`,
    {
      inc_votes: -1,
    }
  );
};

export const getComments = (article_id) => {
  return axios.get(
    `https://ostroumova-news.herokuapp.com/api/articles/${article_id}/comments`
  );
};

export const postComment = (article_id, body) => {
  return axios
    .post(
      `https://ostroumova-news.herokuapp.com/api/articles/${article_id}/comments`,
      {
        username: "grumpy19",
        body: body,
      }
    )
    .then((res) => {
      return res.data;
    });
};
