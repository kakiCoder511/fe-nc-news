import { useState } from "react";
import { patchVoteByArticleId } from "../../api";

export default function VotePrastic(article_id, initialVotes) {
  const [votedDelta, setVotedDelta] = useState(0);
  const [currentVote, setCurrentVote] = useState(0);
  const [isVoting, setIsVoting] = useState(false);
  const [error, setError] = useState(null);

  const handleVoteClick = (newVote) => {
    if (isVoting) {
      return;
    }

    let voteChange = 0;
    let updatedVote = currentVote;

    if (newVote === currentVote) {
      voteChange = currentVote - newVote;
      updatedVote = 0;
    } else {
      voteChange = newVote - currentVote;
      updatedVote = newVote;
    }
    setIsVoting(true);
    setVotedDelta((prev) => {
      prev + voteChange;
    });
    setCurrentVote(updatedVote);
    setError(null);

    patchVoteByArticleId(article_id, voteChange)
      .catch(() => {
        //rollback
        setVotedDelta((prev) => {
          prev - currentVote;
        });
        setCurrentVote(currentVote);
        setError("❌ Vote failed. Please try again!");
      })
      .finally(() => {
        setIsVoting(false);
      });
  };
  return (
    <div className="votesSection">
      <p>Votes:{initialVotes + votedDelta}</p>
      <button
        onCLick={() => {
          handleVoteClick;
        }}
        disabled={isVoting}
      >
        👍🏻upvote
      </button>
      <button
        onCLick={() => {
          handleVoteClick;
        }}
        disabled={isVoting}
      >
        👎🏻downvote
      </button>
      {error ? <p>{error}</p> : null}
    </div>
  );
}
