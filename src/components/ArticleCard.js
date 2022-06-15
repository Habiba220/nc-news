import { Button } from "@mui/material";

const ArticleCard = ({article}) => {
    return (
        <div className="ArticleCard">
          <li className="ArticleCardContent">
            <h3>{article.title}</h3>
            <p>By {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Date created: {article.created_at}</p>
            <p>Votes: {article.votes}</p>
            <Button>See full article</Button>
          </li>
        </div>
      );
}

export default ArticleCard;

