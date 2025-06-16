import { useEffect, useState } from "react";
import { getTopics } from "../../api";
import { useNavigate } from "react-router-dom";

export default function TopicsBar({article}) {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTopics().then(setTopics).catch(console.error);
  }, []);

  return (
    <nav>
      {topics.map((topic) => (
        <button key={topic.slug} onClick={() => navigate(`/topics/${topic.slug}`)}>
          {topic.slug}
        </button>
      ))}
    </nav>
  );
}
