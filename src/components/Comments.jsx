import CommentCard from "./CommentCard";
import { useState, useEffect } from "react";
import { getComments } from "../api";
import CommentAdder from "./CommentAdder";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((res) => {
      setComments(res.data.comments);
    });
  }, [article_id]);

  return (
    <main>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} {...comment} />;
      })}
      {<CommentAdder comments={comments} setComments={setComments} />}
    </main>
  );
}

export default Comments;
