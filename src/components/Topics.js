import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/api";
import TopicCard from './TopicCard'

const Topics = () => {
    const [currentTopics, setCurrentTopics] = useState([{}]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        fetchTopics().then((topics) => {
        setCurrentTopics(topics);
        setIsLoading(false)
      });
    }, []);
  
    if(isLoading) { return (<>
        <div className="loader"></div> <p className="Loading">Loading...</p>
        </>)}
    return (
    <div className="ArticleList">
        <ul className="TopicListContainer">
          {currentTopics.map((topic) => {
            return <TopicCard key={topic.slug} topic={topic} />;
          })}
        </ul>
    </div>
    );
}

export default Topics;

