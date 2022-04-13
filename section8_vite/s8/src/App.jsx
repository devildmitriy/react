import { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import "./App.css";
import Userslist from "./components/Users/Userslist";
function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUsers) => {
    console.log(newUsers);
    setUsers(state => {
      console.log(state);
      return [...state, newUsers];
    });
  };

  return (
    <>
      <AddUsers addUserHandler={addUserHandler} />
      <Userslist users={users}/>
    </>
  );
}

export default App;
