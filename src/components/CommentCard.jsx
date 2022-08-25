import moment from "moment";
/*import CommentAdder from "./CommentAdder"; */

function CommentCard({ comment_id, votes, created_at, author, body }) {
  return (
    <section className="singleComment">
      <p className="author">Comment_id: {comment_id}</p>
      <p>{moment(created_at).utc().format("YYYY-MM-DD")}</p>
      <p className="author">Author: {author}</p>
      <p>{body}</p>
      <span>Votes: {votes}</span>
    </section>
  );
}

export default CommentCard;
