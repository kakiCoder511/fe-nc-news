export default function UserCard({ user }) {
  if (!user) return <p>Loading user...</p>;

  return (
    <div className="userCard">
      <img src={user.avatar_url} alt="user avatar" width={30} height={30}  />
      <p className="username">{user.username}</p>
    </div>
  );
}
