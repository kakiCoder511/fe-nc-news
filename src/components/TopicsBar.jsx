import { useEffect, useState } from "react";
import { getTopics } from "../../api";
import { useNavigate } from "react-router-dom";

export default function TopicsBar({ article }) {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then((topics) => {
        setTopics(topics);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>⏳ Loading topics...</p>;
  if (isError) return <p>❌ Failed to load topics. Please try again later.</p>;

  return (
    <nav>
      <div className="topics-bar">
        <strong>TOPICS:</strong>
        <div className="topics-wrapper">
          {topics.map((topic) => (
            <button
              key={topic.slug}
              onClick={() => navigate(`/topics/${topic.slug}`)}
            >
              {topic.slug}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
