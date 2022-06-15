import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user-context";

const Nav = () => {
  const { userContext } = useContext(UserContext);

  return (
    <nav className="topnav">
      <Link to={`/users/${userContext.username}`}>{userContext.username}</Link>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/articles">All Articles</Link>
    </nav>
  );
};

export default Nav;