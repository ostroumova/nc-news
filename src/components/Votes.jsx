import { useState } from "react";
import { updateArticle } from "../api";

const Votes = ({ article_id, votes }) => {
  const [optimisticVotes, setOptimisticVotes] = useState(0);

  const incrementVotes = () => {
    setOptimisticVotes((currVotes) => {
      return currVotes + 1;
    });
    updateArticle(article_id).catch(() => {
      alert("Something went wrong. Try another time");
      setOptimisticVotes((currVotes) => {
        return currVotes - 1;
      });
    });
  };
  return (
    <section>
      <button
        className="upvote"
        onClick={() => {
          incrementVotes();
        }}
      >
        Upvote: {votes + optimisticVotes}
      </button>
    </section>
  );
};

export default Votes;
