import CommentCard from "./CommentCard";
import { useState, useEffect } from "react";
import { getComments } from "../api";
import CommentAdder from "./CommentAdder";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isCatchError, setCatchError] = useState(false);

  useEffect(() => {
    getComments(article_id)
      .catch(() => {
        setCatchError(true);
      })
      .then((res) => {
        setComments(res.data.comments);
      });
  }, [article_id]);

  if (isCatchError === true) {
    return (
      <div className="errorMessage">
        <p>Something went wrong. Please check and try again!</p>
      </div>
    );
  }

  return (
    <main>
      {comments.map((comment) => {
        return (
          <CommentCard
            setComments={setComments}
            key={comment.comment_id}
            {...comment}
          />
        );
      })}
      {<CommentAdder article_id={article_id} setComments={setComments} />}
    </main>
  );
}

export default Comments;
