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
  const [isCatchError, setCatchError] = useState(false);

  const handleRemoveComment = () => {
    deleteComments(comment_id)
      .catch(() => {
        setCatchError(true);
      })
      .then(() => {
        setComments((currComments) => {
          return currComments.filter((comment) => {
            return comment.comment_id !== comment_id;
          });
        });
      });
    setIsRemoved(true);
    setLoggedInUser(author);
  };
  if (isCatchError === true) {
    return (
      <div className="errorMessage">
        <p>Something went wrong. Please check and try again!</p>
      </div>
    );
  }

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
