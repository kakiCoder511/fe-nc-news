import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import TopicsBar from "./components/TopicsBar.jsx";
import ArticlesList from "./components/ArticlesList.jsx";
import ArticlePage from "./components/ArticlePage.jsx";
import "./App.css";

function App() {
  const user = { username: "tickle122", avatar_url: "/avatar.jpg" };

  return (
    <div>
      <Header user={user} linkto="/"/>
      <TopicsBar />

      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="articles/:article_id" element={<ArticlePage user={user}/>} />
      </Routes>
    </div>
  );
}

export default App;
