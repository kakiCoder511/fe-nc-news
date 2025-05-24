import { useState } from "react";
import { patchVoteByArticleId } from "../../api";

export default function ArticleVotes({ article_id, initialVotes }) {
  const [voteDelta, setVoteDelta] = useState(0);
  const [currentVote, setCurrentVote] = useState(0); // 1 = upvote, -1 = downvote, 0 = none
  const [isVoting, setIsVoting] = useState(false);
  const [error, setError] = useState(null);

  const handleVoteClick = (newVote) => {
    if (isVoting) return;

    let voteChange = 0;
    let updatedVote = currentVote;

    if (newVote === currentVote) {
      // cancel vote
      voteChange = -newVote;
      updatedVote = 0;
    } else {
      voteChange = newVote - currentVote; // e.g. from -1 to 1 = +2
      updatedVote = newVote;
    }

    setIsVoting(true);
    setVoteDelta((prev) => prev + voteChange);
    setCurrentVote(updatedVote);
    setError(null);

    patchVoteByArticleId(article_id, voteChange)
      .catch(() => {
        // rollback
        setVoteDelta((prev) => prev - voteChange);
        setCurrentVote(currentVote); // revert
        setError("❌ Vote failed. Please try again!");
      })
      .finally(() => {
        setIsVoting(false);
      });
  };

  return (
    <div>
      <p>Votes: {initialVotes + voteDelta}</p>
      <button
        onClick={() => handleVoteClick(1)}
        disabled={isVoting}
      >
        ⬆️
      </button>
      <button
        onClick={() => handleVoteClick(-1)}
        disabled={isVoting}
      >
        ⬇️
      </button>
      {error ? <p>{error}</p> : null}
    </div>
  );
}
