import { fetchArticleComments } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import PostComments from "./PostComment";

const CommentsList = () => {
    const {article_id} = useParams();
    const [articleComments, setArticleComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        fetchArticleComments(article_id).then((comments) => {
        setArticleComments(comments);
        setIsLoading(false)
      });
    }, [article_id]);
  
    if(isLoading) { return (<>
        <div className="loader"></div> <p className="Loading">Loading...</p>
        </>)}
        
    
    return (
        <div className="CommentsList">
            <h4>Checkout What People Think</h4>
            <ul className="CommentsContainer">
              {articleComments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} />;
              })}
            </ul>
            <PostComments setArticleComments={setArticleComments}/>
        </div>
        );
}

export default CommentsList;

