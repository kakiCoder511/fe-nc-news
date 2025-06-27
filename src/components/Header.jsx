import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header({ user, linkto }) {
  return (
    <header className="header">
      <Link to={linkto}>
        <h1>NC News </h1>
      </Link>
      <UserCard user={user} />
    </header>
  );
}
