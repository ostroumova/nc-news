import CommentCard from "./CommentCard";
import { useState, useEffect } from "react";
import { getComments } from "../api";
import CommentAdder from "./CommentAdder";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  return (
    <main>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} {...comment} />;
      })}
      {<CommentAdder setComments={setComments} />}
    </main>
  );
}

export default Comments;
