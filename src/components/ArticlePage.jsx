import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById, getCommentsByArticleId } from "../../api";
import CommentsList from "./CommentsList";
import dayjs from "dayjs";
import ArticleVotes from "./ArticleVotes";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoadingArticle, setIsLoadingArticle] = useState(true);
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [isArticleError, setIsArticleError] = useState(false);
  const [isCommentsError, setIsCommentsError] = useState(false);

  useEffect(() => {
    setIsLoadingArticle(true);
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
      })
      .catch((err) => {
        setIsArticleError(true);
      })
      .finally(() => {
        setIsLoadingArticle(false);
      });
  }, [article_id]);

  useEffect(() => {
    setIsLoadingComments(true);
    getCommentsByArticleId(article_id)
      .then((data) => {
        setComments(data);
      })
      .catch((err) => {
        setIsCommentsError(true);
      })
      .finally(() => {
        setIsLoadingComments(false);
      });
  }, [article_id]);


  if (isLoadingArticle || isLoadingComments) {
    return <p>⏳ Loading ... 🥱</p>;
  }
  if (isArticleError || isCommentsError) {
    return <p>OMG 🤯 Something went wrong</p>;
  }
  // 404: article is null
  if (!article) return <p> Article not found </p>;


  return (
    <section>
      <h2>{article.title}</h2>
      <p>{article.topic}</p>
      <p>{article.body}</p>
      <img
        src={article.article_img_url}
        alt="image of the article"
        width={540}
        height={310}
      />
      <div className="articleInfo">
        <ArticleVotes article_id={article.article_id} initialVotes={article.votes}/>  | 🗓️{" "}
        {dayjs(article.created_at).format(" DD MMM YYYY ddd")} | 🖋️By{" "}
        {article.author}
      </div>
      <p>Comments</p>
      <CommentsList comments={comments} />
    </section>
  );
}
