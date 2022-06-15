import { useEffect, useState } from "react";
import { fetchAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";


const AllArticles = () => {
    const [currentArticles, setCurrentArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetchAllArticles().then((articles) => {
        setCurrentArticles(articles);
        setIsLoading(false)
      });
    }, []);
  
    if(isLoading) { 
      return (<>
      <div className="loader"></div> <p className="Loading">Loading...</p>
      </>)
    }
  
    return (
      <div className="ArticleList">
        <ul className="ArticleListContainer">
          {currentArticles.map((article) => {
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

export default AllArticles;