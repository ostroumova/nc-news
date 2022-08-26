import moment from "moment";
import { useState } from "react";
import { deleteComments } from "../api";

function CommentCard({
  setComments,
  comment_id,
  votes,
  created_at,
  author,
  body,
}) {
  const [loggedInUser, setLoggedInUser] = useState("grumpy19");
  const [isRemoved, setIsRemoved] = useState(false);

  const handleRemoveComment = () => {
    deleteComments(comment_id).then(() => {
      setComments((currComments) => {
        return currComments.filter((comment) => {
          return comment.comment_id !== comment_id;
        });
      });
    });
    setIsRemoved(true);
  };

  return (
    <section className="singleComment">
      <p className="author">Comment_id: {comment_id}</p>
      <p>{moment(created_at).utc().format("YYYY-MM-DD")}</p>
      <p className="author">Author: {author}</p>
      <p>{body}</p>
      <span>Votes: {votes}</span>
      {loggedInUser === author ? (
        <button
          className="remove"
          onClick={() => {
            handleRemoveComment();
          }}
        >
          Remove comment
        </button>
      ) : null}
      {isRemoved ? <p>Your comment was remeoved succesfully</p> : null}
    </section>
  );
}

export default CommentCard;
