import  CommentCard  from "./CommentCard";

export default function CommentsList({comments=[]}) {
  console.log("💬 comments prop:", comments);

  return (
    <ul>
      {  comments.length > 0 ? (
        comments.map((comment) => (
          <CommentCard comment={comment} key={comment.comment_id} />
        ))
      ) : (
        <h3>👀 Let's post your comment</h3>
      )}
    </ul>
  );
}
