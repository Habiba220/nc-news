import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";
import { TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import UserContext from "../context/user-context";

const PostComments = ({setArticleComments}) => {
    const [newComment, setNewComment] = useState('');
    const {article_id} = useParams();
    const {userContext} = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        postComment(article_id, newComment.body, userContext.username).then((newComment) => {
            setArticleComments((currList) => {
                return [...currList, newComment]
            })
        })

        setNewComment('');
      };

    return (
        <>
        <h2>Let us know what YOU think</h2>
        <form  onSubmit={handleSubmit}>
        <TextField
            id="outlined-category"
            label="what's on your mind"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
        />
        <Button type="submit" onClick={handleSubmit}>Post Comment</Button>
        </form>
        </>
    )

}
export default PostComments;

/*
Example Request
            {
              body: String,
              username: String
            }
          
Example Response
            {
              comment: {
                comment_id: Number,
                body: String,
                article_id: Number,
                author: String,
                votes: Number,
                created_at: String
              }
            }
            */