import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../../api";
import dayjs from "dayjs";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [article_id]);
  
  if (isLoading) {
    return <p>⏳Article is Loading ... 🥱</p>;
  }
  if (isError) {
    return <p>OMG 🤯 Something went wrong</p>;
  }
console.log(article);

  return (
    <section>
      <h2>{article.title}</h2>
      <p>{article.topic}</p>
      <p>{article.body}</p>
      <img src={article.article_img_url} alt="image of the article" width={30} height={30} />
      <p>
        | votes{ article.votes} | 🗓️ {dayjs(article.created_at).format(" DD MMM YYYY ddd")} | 🖋️By {article.author} 
      </p>
    </section>
  );
}
