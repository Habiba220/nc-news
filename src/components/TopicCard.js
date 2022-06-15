import { Link } from "react-router-dom";

const TopicCard = ({topic}) => {
    return (
        <div className="TopicCard">
          <li className="ArticleCardContent">
            <h2>{topic.slug}</h2>
            <p>{topic.description}</p>
            <Link to={`/topics/${topic.slug}`}>Checkout the hotest takes</Link>
            {/* <Button>Checkout the hotest takes</Button> */}
          </li>
        </div>
      );
}

export default TopicCard; 