import moment from "moment";
import { useState } from "react";
import { deleteComments } from "../api";

function CommentCard({ comment_id, votes, created_at, author, body }) {
  const [loggedInUser, setLoggedInUser] = useState("grumpy19");

  const handleRemoveComment = (event) => {
    event.preventDefault();

    deleteComments(author, comment_id).then((res) => {
      console.log(res);
    });
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
            handleRemoveComment(author, comment_id);
          }}
        >
          Remove comment
        </button>
      ) : null}
    </section>
  );
}

export default CommentCard;
