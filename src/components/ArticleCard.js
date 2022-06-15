import { Button } from "@mui/material";

const ArticleCard = ({article}) => {
    return (
        <>
          <li>
            <p>{article.title}</p>
            <p>By {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Date created: {article.created_at}</p>
            <p>Votes: {article.votes}</p>
            <Button>See full article</Button>
          </li>
        </>
      );
}

export default ArticleCard;