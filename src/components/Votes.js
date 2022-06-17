import { useState, useContext } from "react";
import { patchArticle } from "../utils/api";
import UserContext from '../context/user-context'

const Votes = ({article_id, votes}) => {
    const {userContext} = useContext(UserContext)
    const [userVote, setUserVote] = useState(0);
    console.log(votes) 
    const handleClick = () => {
        setUserVote((preVote) => preVote + 1);
        patchArticle(article_id, 1)
    }
    console.log(userVote)
    
return (
<>
  <p class="vote-count">Votes: {votes + userVote}</p>
  <button
          disabled={userContext.username === 'Not signed in'}
          onClick={handleClick}
          class="vote-btn" 
          data-default-text="Vote This Article Up!"
          data-alt-text="Thanks for Voting">
    <span class="icon"></span> <span class="text">Vote This Article Up!</span>
  </button>
</>
)
}

export default Votes;