import dayjs from "dayjs";

export default function CommentCard({comment}) {
  return (
    <li className="commentCard">
      <p>{comment.body}</p>
      <p>
        By {comment.author} | 🗓️{" "}
        {dayjs(comment.created_at).format(" DD MMM YYYY ddd")}
      </p>
    </li>
  );
}
