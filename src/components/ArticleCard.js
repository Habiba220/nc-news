import { Link } from "react-router-dom";

const ArticleCard = ({article}) => {
    return (
        <div className="ArticleCard">
          <li className="ArticleCardContent">
            <h3>{article.title}</h3>
            <p>By {article.author}</p>
            <p>Hot take on {article.topic}</p>
            <p>{article.created_at}</p>
            <Link to={`/articles/${article.article_id}`}>Read full article</Link>
            {/* <p>Votes: {article.votes}</p> */}
            {/* <Button>See full article</Button> */}
          </li>
        </div>
      );
}

export default ArticleCard;

