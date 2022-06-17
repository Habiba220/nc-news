import CommentsVotes from "./CommentsVotes";

const CommentCard = ({comment}) => {
    return(
        <main className="CommentItem" key={comment.comment_id}>
            <h6 id="CommentTitle">{comment.author}</h6>
            <p id="CommentDate">created at {comment.created_at}  </p>
            <p id="CommentBody">{comment.body}</p>
            <CommentsVotes comment_id={comment.comment_id} votes={comment.votes}/>
        </main>
        );
}

export default CommentCard;

// [
//     {
//       comment_id: Number,
//         body: String,
//         article_id: Number,
//         author: String,
//         votes: Number,
//         created_at: String
//       }
//     ]