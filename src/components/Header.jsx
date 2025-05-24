import UserCard from "./UserCard";
import { Link } from "react-router-dom"; // 如果係 SPA

export default function Header({ user, linkto }) {
  return (
    <Link to={linkto}>
      <header className="header">
        <h1>🏴‍☠️NC News</h1>
        <UserCard user={user} />
      </header>
    </Link>
  );
}
