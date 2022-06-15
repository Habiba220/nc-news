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
    });
  
    if(isLoading) { return <p>Loading...</p>}
  
    return (
      <>
        <ul>
          {currentArticles.map((article) => {
            return (
              <>
                <ArticleCard key={article.article_id} article={article} />
              </>
            );
          })}
        </ul>
      </>
    );
}

export default AllArticles;