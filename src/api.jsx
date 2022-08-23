import axios from "axios";

export const fetchArticles = () => {
  return fetch(" https://ostroumova-news.herokuapp.com/api/articles").then(
    (res) => {
      return res.json();
    }
  );
};

export const postComment = (username, article_id) => {
  console.log(username, "username", article_id, "article_id");
  return axios
    .post(
      `https://ostroumova-news.herokuapp.com/api/articles/${article_id}/comments`,

      {
        article_id: article_id,
      }
    )
    .then((res) => {
      return res.statusText;
    })
    .catch((err) => {
      console.log(err);
    });
};
