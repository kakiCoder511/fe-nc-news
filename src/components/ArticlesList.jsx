import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams]=useSearchParams();

  useEffect(() => {
    const sort_by = searchParams.get("sort_by") || "created_at";
    const order = searchParams.get("order") || "desc";

    setIsLoading(true);
    setIsError(false);

    getArticles({sort_by,order})
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  if (isError) {
    return <p>Waking up the server.../Please try again Later ⏳</p>;
  }
  if (isLoading) {
    return <p>⏳Articles is Loading ... 🥱</p>;
  }

  return (
    <section>
      <h2>All Articles</h2>
      <ul>
        { articles.length > 0 ? (
          
          articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })
        ) : (
          <h3>No Item under Available👀</h3>
        )}
      </ul>
    </section>
  );
}
