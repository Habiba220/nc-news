import { fetchUsers } from "../utils/api";
import UserContext from "../context/user-context";
import { useEffect, useState, useContext } from "react";
import { Button } from "@mui/material";


const Users = () => {
  const [users, setUser] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const { setUserContext } = useContext(UserContext);
 
  useEffect(() => {
    fetchUsers().then((users) => {
      setUser(users);
      setIsLoading(false);
    });
  }, []);

  if(isLoading) { return (<>
    <div className="loader"></div> <p className="Loading">Loading...</p>
    </>)}

return (
    <div className="ArticleList">
      <h2 className="Title">Identify Yourself</h2>
      <ul className="UserListContainer">
        {users.map((user) => {
          return (
            <div className="UserCard">
              <li className="ArticleCardContent">
                <img scr={user.avatar_url} alt={user.username} />
                <h3>{user.name}</h3>
                <h4>{user.username}</h4>
                <Button
                  onClick={() => {
                    setUserContext(user);
                  }}
                >
                  Sign-in
                </Button>
                
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;