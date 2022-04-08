import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

function Userslist({ users }) {
  let listUsers = users.map((item) => (
    <li key={item.id}>
      {item.userName} ({item.age} years old) {item.id}
    </li>
  ));
  return (
    <Card className={classes.users}>
      <ul>{listUsers}</ul>
    </Card>
  );
}

export default Userslist;
