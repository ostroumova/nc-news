import { useState } from "react";
import { postComment } from "../api";

const CommentAdder = ({ setComments, article_id }) => {
  const [newComment, setNewComment] = useState("");
  const [isEmpty, setEmpty] = useState(true);
  const [isCatchError, setCatchError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newComment.length > 1) {
      setEmpty(false);
      postComment(article_id, newComment)
        .catch(() => {
          setCatchError(true);
        })
        .then((newCommentApi) => {
          setComments((currComments) => {
            return [...currComments, newCommentApi];
          });
        });
      setNewComment("");
    }
  };

  if (isCatchError === true) {
    return (
      <div className="errorMessage">
        <p>Something went wrong. Please check and try again!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add a new comment:
        <input
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />
      </label>
      <button type="submit">Add comment</button>
      {isEmpty ? <p>You can't post empty comment</p> : null}
    </form>
  );
};

export default CommentAdder;
