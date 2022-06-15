import { Button } from "@mui/material";

const TopicCard = ({topic}) => {
    return (
        <div className="TopicCard">
          <li className="ArticleCardContent">
            <h2>{topic.slug}</h2>
            <p>{topic.description}</p>
            <Button>Checkout the hotest takes</Button>
          </li>
        </div>
      );
}

export default TopicCard; 