import { useState } from "react";

const CommentAdder = ({ setComments }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewComment((currComments) => {
      return [newComment, ...currComments];
    });
    setNewComment("");
  };

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
    </form>
  );
};

export default CommentAdder;
