import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-api-szrs.onrender.com/api",
});
export const getArticles = ({sort_by ="created_at",order = "desc", topic}={}) => {
  const params ={sort_by,order}
  if(topic) params.topic = topic 

  return ncNewsApi.get("/articles",{params}).then((res) => {
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

export const postCommentByArticleID = (article_id, username, body) => {
  return ncNewsApi.post(`/articles/${article_id}/comments`, {
    username,
    body
  });
};

export const deleteCommentById =(comment_id)=>{
  return ncNewsApi.delete(`/comments/${comment_id}`)
}

export const getTopics = () => {
  return ncNewsApi.get("/topics").then((res) => res.data.topics);
};

export const getArticlesByTopic = (slug) => {
  return ncNewsApi.get(`/articles?topic=${slug}`).then((res) => res.data.articles);
};

