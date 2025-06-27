import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import TopicsBar from "./components/TopicsBar.jsx";
import ArticlesList from "./components/ArticlesList.jsx";
import ArticlePage from "./components/ArticlePage.jsx";
import SortBy from "./components/SortBy.jsx";
import NotFound from "./components/Notfound.jsx";
import "./App.css";

function App() {
  const user = { username: "tickle122", avatar_url: "/avatar.jpg" };

  return (
    <div>
      <Header user={user} linkto="/" />
      <div className="controls">
        <TopicsBar />
        <SortBy />
      </div>

      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/topics/:slug" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<ArticlePage user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
