import { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { getArticles } from "../../api";
import "./ArticlesList.css";

export default function ArticlesList() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getArticles({ sort_by: sortBy, order: order, topic: slug })
      .then((data) => {
        setArticles(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [slug, sortBy, order]);

  if (isLoading) return <p>⏳ Loading Articles... 🥱</p>;
  if (isError) return <p>❌ Failed to load articles.</p>;
  if (articles.length === 0) return <p>📭 No articles found.</p>;

  return (
    <section>
      {slug && <h2>Topic: {slug}</h2>}
      <ul className="articles-list">
        {articles.map((article) => (
          <li
            key={article.article_id}
            className="article-item"
            onClick={() => navigate(`/articles/${article.article_id}`)}
          >
            <img
              src={article.article_img_url}
              alt="Article Thumbnail"
            />
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>
                By {article.author} | Votes: {article.votes} | Comments:{" "}
                {article.comment_count}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
