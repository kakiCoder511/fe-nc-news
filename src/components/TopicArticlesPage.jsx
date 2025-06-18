import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../../api";

export default function TopicArticlesPage() {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getArticlesByTopic(slug)
      .then((data) => {
        setArticles(data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return <p> ⏳ Loading Articles... 🥱</p>;
  }
  if (isError) {
    return <p>❌Topic not found or Server error</p>;
  }
  if (articles.length === 0) {
    return <p>📭 No articles under this topic.</p>;
  }

  return (
    <section>
      <h2>Topic: {slug}</h2>
      {articles.map((article) => (
          <li key={article.article_id} style={{ marginBottom: "1rem", cursor: "pointer" }}>
          <h3>{article.title}</h3>
          <p>
            By {article.author}| Votes: {article.votes} | comments:{" "}
            {article.comment_count}
          </p>
        </li>
      ))}
    </section>
  );
}
