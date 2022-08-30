import { useState } from "react";
import { updateArticle } from "../api";

const Votes = ({ article_id, votes }) => {
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [isErrored, setIsErrorred] = useState(false);

  const incrementVotes = () => {
    setOptimisticVotes((currVotes) => currVotes + 1);
    updateArticle(article_id).catch(() => {
      setOptimisticVotes((currVotes) => currVotes - 1);
      setIsErrorred(true);
    });
  };

  const decreaseVote = () => {
    setOptimisticVotes((currVotes) => currVotes - 1);
    updateArticle(article_id).catch(() => {
      setOptimisticVotes((currVotes) => currVotes + 1);
      setIsErrorred(true);
    });
  };

  console.log(votes, "votes");
  console.log(optimisticVotes, "optimisticVotes");

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
        Downvote
      </button>
      <span>{votes + optimisticVotes}</span>
      {isErrored ? <p>Something went wrong. Try another time</p> : null}
    </div>
  );
};

export default Votes;
