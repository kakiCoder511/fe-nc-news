import dayjs from "dayjs";
import { deleteCommentById } from "../../api";
import { useState } from "react";

export default function CommentCard({ comment, user, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const isOwnComment = comment.author === user.username;

  const handleDelete = () => {
    if (isDeleting) return;

    const confirmDelete = window.confirm("💥 Delete your comment?");
    if (!confirmDelete) return;

    setIsDeleting(true);

    deleteCommentById(comment.comment_id)
      .then(() => {
        onDelete(comment.comment_id);
      })
      .catch((err) => {
          console.log("❌ API delete error:", err.response?.data || err.message);

        alert("❌ Failed to delete comment");
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <li className="commentCard">
      <p>{comment.body}</p>
      <p>
        By {comment.author} | 🗓️{" "}
        {dayjs(comment.created_at).format("DD MMM YYYY ddd")}
        {isOwnComment && <span style={{ color: "green" }}> (You)</span>}
      </p>

      {isOwnComment && (
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="delete-button"
        >
          {isDeleting ? "Deleting..." : "🗑️ Delete"}
        </button>
      )}
    </li>
  );
}
