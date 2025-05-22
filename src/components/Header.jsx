import UserCard from "./UserCard";

export default function Header({user}) {
  return (
    <header className="header">
      <h1>🏴‍☠️NC News</h1>
      <UserCard user={user} />
    </header>
  );
}
