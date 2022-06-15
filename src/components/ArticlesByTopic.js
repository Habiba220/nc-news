import { useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const ArticlesByTopic = () => {
    const [currentTopicArticles, setCurrentTopicArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {topic} = useParams()
  
    useEffect(() => {
      fetchArticlesByTopic(topic).then((articles) => {
        setCurrentTopicArticles(articles);
        setIsLoading(false)
      });
    }, [topic]);
  
    if(isLoading) { 
      return (<>
      <div className="loader"></div> <p className="Loading">Loading...</p>
      </>)
    }
  
    return (
      <div className="ArticleList">
        <ul className="ArticleListContainer">
          {currentTopicArticles.map((article) => {
            return (
              <>
                <ArticleCard key={article.article_id} article={article} />
              </>
            );
          })}
        </ul>
      </div>
    );
}

export default ArticlesByTopic;