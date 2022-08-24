import { useState } from "react";
import { updateArticle } from "../api";

const Votes = ({ article_id, votes }) => {
  const [optimisticVotes, setOptimisticVotes] = useState(0);

  const incrementVotes = () => {
    setOptimisticVotes((currVotes) => currVotes + 1);
    updateArticle(article_id).catch(() => {
      alert("Something went wrong. Try another time");
      setOptimisticVotes((currVotes) => currVotes - 1);
    });
  };

  const decreaseVote = () => {
    setOptimisticVotes((currVotes) => currVotes - 1);
    updateArticle(article_id).catch(() => {
      alert("Something went wrong. Try another time");
      setOptimisticVotes((currVotes) => currVotes + 1);
    });
  };
  return (
    <div>
      <button
        className="upvote"
        onClick={() => {
          incrementVotes();
        }}
      >
        Upvote
      </button>
      <button
        className="decrease"
        onClick={() => {
          decreaseVote();
        }}
      >
        Downvote:
      </button>
      {votes + optimisticVotes}
    </div>
  );
};

export default Votes;
