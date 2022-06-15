import { fetchUsers } from "../utils/api";
import UserContext from "../context/user-context";
import { useEffect, useState, useContext } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Home = () => {
    const { setUserContext, userContext } = useContext(UserContext);
 return (<>
 <br></br>
 <h2 className="TitleTwo">Welcome {userContext.name} to our humble website...</h2>
 <br></br>
 <Link to={`/users`} >Don't forget to sign in!</Link>
 </>)
}

export default Home;

/*
( <>
        {users.map((user) => {
            
            return (
        <>
        <FormControl fullWidth>    
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Identify Yourself
            </InputLabel>
        <NativeSelect
            defaultValue={30}
            inputProps={{
            name: 'Identify Yourself',
            id: 'uncontrolled-native',
            }}
        >
            <option value={user.username}>{user.name}</option>
        </NativeSelect>
        </FormControl>
        <Button
                  onClick={() => {
                    setUserContext(user);
                  }}
                >
                  Sign-in
        </Button>
        </>)
        })}
</>
)
*/