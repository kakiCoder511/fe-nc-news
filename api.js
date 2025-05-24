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
    
      console.log("📦 Article API response:", res.data);

    return res.data.article;
  });
};

export const getCommentsByArticleId =(article_id)=>{
    return ncNewsApi.get(`/articles/${article_id}/comments`).then((res)=>{return res.data.comments })
}


export const patchVoteByArticleId=(article_id, change)=>{
return ncNewsApi.patch(`/articles/${article_id}`, {
    inc_votes: change,
  });
};