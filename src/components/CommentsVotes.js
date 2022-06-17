import { useState, useContext } from "react";
import { patchComment } from "../utils/api";
import UserContext from '../context/user-context'

const CommentsVotes = ({comment_id, votes}) => {
    const {userContext} = useContext(UserContext)
    const [userCommentVote, setUserCommentVote] = useState(0);

    const handleClick = () => {
        setUserCommentVote((preVote) => preVote + 1);
        patchComment(comment_id, 1)
    }
    
    
return (
<>
  <p class="vote-count">Votes: {votes + userCommentVote}</p>
  <button
          disabled={userContext.username === 'Not signed in'}
          onClick={handleClick}
          class="vote-btn" 
          data-default-text="Vote This Comment Up!"
          data-alt-text="Thanks for Voting">
    <span class="icon"></span> <span class="text">Vote This Comment Up!</span>
  </button>
</>
)
}

export default CommentsVotes;