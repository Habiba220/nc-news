import { fetchArticle } from "../utils/api";
import Votes from './Votes'
import CommentsList from './CommentsList'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const IndvidualArticle = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        fetchArticle(article_id).then((article) => {
        setArticle(article);
        setIsLoading(false)
      });
    }, [article_id]);
  
    if(isLoading) { return (<>
        <div className="loader"></div> <p className="Loading">Loading...</p>
        </>)}
        console.log(article.votes)
        console.log(article.article_id)
    return (
    <main className="ArticleItem">
        <h2 id="ArticleTitle">{article.title}</h2>
        <p id="InfoLine">By {article.author} || On {article.topic} || {article.created_at}</p>
        <p id="ArticleBody">{article.body}</p>
        <Votes article_id={article.article_id} votes={article.votes}/>
        <CommentsList/>
    </main>
    );
}

export default IndvidualArticle;

