import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserContext from "./context/user-context";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import AllArticles from './components/AllArticles'
import ArticlesByTopic from './components/ArticlesByTopic'
import Home from './components/Home'
import IndvidualArticle from './components/IndividualArticle'
import Topics from './components/Topics'
import Users from "./components/Users";
import UserProfile from "./components/UserProfile";

function App() {
  const [userContext, setUserContext] = useState({
    username: 'Don\'t forget to sign in',
    name: 'you still have not signed in',
    avatar_url: 'come on sign in' 
  });
  
  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{ userContext, setUserContext }}>
          <Nav />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:topic" element={<ArticlesByTopic />} />
            <Route path="/articles" element={<AllArticles />} />
            <Route path="/articles/:article_id" element={<IndvidualArticle />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:username" element={<UserProfile />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
