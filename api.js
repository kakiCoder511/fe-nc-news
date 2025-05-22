import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-api-szrs.onrender.com/api",
});
export const getArticles = () => {
  return ncNewsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const getArticleById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then((res) => {
    

    return res.data.article;
  });
};
