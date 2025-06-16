import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../../api";

export default function TopicArticlesPage() {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticlesByTopic(slug).then(setArticles).catch(console.error);
  }, [slug]);

  return (
    <section>
      
      <h2>Topic: {slug}</h2>
      {articles.map((article) => (
        <article key={article.article_id}>
          <h3>{article.title}</h3>
          <p>By {article.author}| Votes: {article.votes} | comments:{" "}
        {article.comment_count}</p>
        </article>
      ))}
    </section>
  );
}
