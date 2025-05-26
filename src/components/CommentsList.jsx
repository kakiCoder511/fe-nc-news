import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { useState } from "react";
export default function CommentsList({ comments = [], user,article_id, setComments }) {
  const [showForm, setShowForm] = useState(false);

  const handleAddComment = () => {
    setShowForm((prev) =>  !prev );

  };


  return (
    <ul>
      <button onClick={handleAddComment} className="add-comment">
        {showForm ? "Cancel" : "+ Add Comment"}
      </button>
      {showForm &&(<CommentForm
       user={user}
       article_id={article_id}
       setComments={setComments}
       onSuccess={()=>setShowForm(false)}
      />) }

      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentCard comment={comment} user={user} key={comment.comment_id} />
        ))
      ) : (
        <h3>👀 Let's post your comment</h3>
      )}
    </ul>
  );
}
