import { postCommentByArticleID } from "../../api";
import { useState } from "react";

export default function CommentForm({
  article_id,
  user,
  setComments,
  onSuccess,
}) {
  const [body, setBody] = useState("");
  const [Error,setError]=useState(null)
  const[isSubmitting, setIsSubmitting]=useState(false)

  const handleFormSumbit = (e) => {
    e.preventDefault();

    if(!body.trim()){
      setError("Comment cannot be empty🐝")
      return
    }

    postCommentByArticleID(article_id, user.username, body)
      .then((res) => {
        setComments((prev) => [res.data.comment, ...prev]);
        setBody("");
        onSuccess();
      })
      .catch((err) => {
        alert("😳 Failed to post comment");
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSumbit}>
        <p>Aurhor: {user.username}</p> <br />
        <label htmlFor="formComment"> 🖋️ Comment:</label> <br />
        <input
          type="text"
          id="comment"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
